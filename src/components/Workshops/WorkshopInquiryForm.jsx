import React, { useState } from 'react';
import styles from './WorkshopInquiryForm.module.css';

const WorkshopInquiryForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        orgType: 'school',
        workshopTypes: [],
        dates: '',
        groupSize: '',
        location: '',
        message: ''
    });

    const [errors, setErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);
    const [submitError, setSubmitError] = useState(null);

    // ✅ YOUR FORMPREE WORKSHOP FORM URL
    const FORMPREE_URL = 'https://formspree.io/f/maqjgzgz';

    const validate = () => {
        const newErrors = {};
        if (!formData.name.trim()) newErrors.name = 'Contact name is required';
        if (!formData.email.trim()) {
            newErrors.email = 'Email is required';
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = 'Email is invalid';
        }
        if (!formData.workshopTypes.length) {
            newErrors.workshopTypes = 'Please select at least one workshop type';
        }
        if (!formData.groupSize.trim()) newErrors.groupSize = 'Group size & age is required';
        return newErrors;
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
        if (errors[name]) {
            setErrors(prev => ({ ...prev, [name]: null }));
        }
    };

    const handleCheckboxChange = (e) => {
        const { value, checked } = e.target;
        setFormData(prev => {
            if (checked) {
                return { ...prev, workshopTypes: [...prev.workshopTypes, value] };
            } else {
                return { ...prev, workshopTypes: prev.workshopTypes.filter(t => t !== value) };
            }
        });
        if (errors.workshopTypes) {
            setErrors(prev => ({ ...prev, workshopTypes: null }));
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        const validationErrors = validate();
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            return;
        }

        setIsSubmitting(true);
        setSubmitError(null);

        try {
            // ✅ FORMPREE: Use FormData
            const formDataToSend = new FormData();
            formDataToSend.append('Contact Name', formData.name);
            formDataToSend.append('Email Address', formData.email);
            formDataToSend.append('Phone Number', formData.phone || '');
            formDataToSend.append('Organization Type', formData.orgType);
            formDataToSend.append('Interested In', formData.workshopTypes.join(', '));
            formDataToSend.append('Est. Group Size & Age', formData.groupSize);
            formDataToSend.append('Preferred Date', formData.dates);
            formDataToSend.append('Location / Address', formData.location || '');
            formDataToSend.append('Additional Notes', formData.message || '');

            // ✅ Send to Formspree
            const response = await fetch(FORMPREE_URL, {
                method: 'POST',
                body: formDataToSend,
                headers: {
                    'Accept': 'application/json'
                }
            });

            if (response.ok) {
                setIsSuccess(true);
                // Reset form
                setFormData({
                    name: '',
                    email: '',
                    phone: '',
                    orgType: 'school',
                    workshopTypes: [],
                    dates: '',
                    groupSize: '',
                    location: '',
                    message: ''
                });
            } else {
                const result = await response.json();
                throw new Error(result.error || 'Submission failed. Please try again.');
            }
            
        } catch (error) {
            console.error('Formspree submission error:', error);
            setSubmitError(error.message || 'Failed to submit request. Please try again.');
        } finally {
            setIsSubmitting(false);
        }
    };

    if (isSuccess) {
        return (
            <section id="inquiry-form" className={styles.section}>
                <div className={styles.container}>
                    <div className={styles.successMessage}>
                        <h3>✅ Workshop Request Submitted!</h3>
                        <p>Thank you for your interest in Yubokits workshops.</p>
                        <p>We have received your inquiry and will contact you within 24-48 hours to discuss details.</p>
                        <p><small>Check your email for confirmation.</small></p>
                        <button
                            className={styles.submitButton}
                            style={{ marginTop: '2rem', width: 'auto', padding: '0.75rem 2rem' }}
                            onClick={() => setIsSuccess(false)}
                        >
                            Send Another Request
                        </button>
                    </div>
                </div>
            </section>
        );
    }

    return (
        <section id="inquiry-form" className={styles.section}>
            <div className={styles.container}>
                <h2 className={styles.title}>Request a Workshop</h2>
                <p className={styles.subtitle}>Fill out the form below and we'll get back to you with a custom quote.</p>

                <form className={styles.form} onSubmit={handleSubmit}>
                    <div className={styles.formGroup}>
                        <label htmlFor="name" className={styles.label}>Contact Name *</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            className={`${styles.input} ${errors.name ? styles.error : ''}`}
                            placeholder="Ex: John Doe"
                        />
                        {errors.name && <span className={styles.errorMessage}>{errors.name}</span>}
                    </div>

                    <div className={styles.formGroup}>
                        <label htmlFor="email" className={styles.label}>Email Address *</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            className={`${styles.input} ${errors.email ? styles.error : ''}`}
                            placeholder="Ex: john@school.edu"
                        />
                        {errors.email && <span className={styles.errorMessage}>{errors.email}</span>}
                    </div>

                    <div className={styles.formGroup}>
                        <label htmlFor="phone" className={styles.label}>Phone Number</label>
                        <input
                            type="tel"
                            id="phone"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            className={styles.input}
                            placeholder="Ex: +216 XX XXX XXX"
                        />
                    </div>

                    <div className={styles.formGroup}>
                        <label htmlFor="orgType" className={styles.label}>Organization Type</label>
                        <select
                            id="orgType"
                            name="orgType"
                            value={formData.orgType}
                            onChange={handleChange}
                            className={styles.select}
                        >
                            <option value="school">School</option>
                            <option value="camp">Summer Camp</option>
                            <option value="library">Library / Community Center</option>
                            <option value="corporate">Corporate Event</option>
                            <option value="private">Private Party</option>
                            <option value="other">Other</option>
                        </select>
                    </div>

                    <div className={`${styles.formGroup} ${styles.fullWidth}`}>
                        <label className={styles.label}>Interested In * (Select all that apply)</label>
                        <div className={styles.checkboxGroup}>
                            <label className={styles.checkboxLabel}>
                                <input 
                                    type="checkbox" 
                                    value="Classroom Workshop" 
                                    onChange={handleCheckboxChange} 
                                    className={`${styles.checkbox} ${errors.workshopTypes ? styles.errorCheckbox : ''}`}
                                    checked={formData.workshopTypes.includes('Classroom Workshop')}
                                />
                                Classroom Workshop
                            </label>
                            <label className={styles.checkboxLabel}>
                                <input 
                                    type="checkbox" 
                                    value="After-School Club" 
                                    onChange={handleCheckboxChange} 
                                    className={`${styles.checkbox} ${errors.workshopTypes ? styles.errorCheckbox : ''}`}
                                    checked={formData.workshopTypes.includes('After-School Club')}
                                />
                                After-School Club
                            </label>
                            <label className={styles.checkboxLabel}>
                                <input 
                                    type="checkbox" 
                                    value="Special Event / Party" 
                                    onChange={handleCheckboxChange} 
                                    className={`${styles.checkbox} ${errors.workshopTypes ? styles.errorCheckbox : ''}`}
                                    checked={formData.workshopTypes.includes('Special Event / Party')}
                                />
                                Special Event / Party
                            </label>
                            <label className={styles.checkboxLabel}>
                                <input 
                                    type="checkbox" 
                                    value="Custom Program" 
                                    onChange={handleCheckboxChange} 
                                    className={`${styles.checkbox} ${errors.workshopTypes ? styles.errorCheckbox : ''}`}
                                    checked={formData.workshopTypes.includes('Custom Program')}
                                />
                                Custom Program
                            </label>
                        </div>
                        {errors.workshopTypes && (
                            <span className={styles.errorMessage}>{errors.workshopTypes}</span>
                        )}
                    </div>

                    <div className={styles.formGroup}>
                        <label htmlFor="groupSize" className={styles.label}>Est. Group Size & Age *</label>
                        <input
                            type="text"
                            id="groupSize"
                            name="groupSize"
                            value={formData.groupSize}
                            onChange={handleChange}
                            required
                            className={`${styles.input} ${errors.groupSize ? styles.error : ''}`}
                            placeholder="Ex: 25 students, 4th grade"
                        />
                        {errors.groupSize && <span className={styles.errorMessage}>{errors.groupSize}</span>}
                    </div>

                    <div className={styles.formGroup}>
                        <label htmlFor="dates" className={styles.label}>Preferred Date</label>
                        <input
                            type="date"
                            id="dates"
                            name="dates"
                            value={formData.dates}
                            onChange={handleChange}
                            className={styles.input}
                        />
                    </div>

                    <div className={`${styles.formGroup} ${styles.fullWidth}`}>
                        <label htmlFor="location" className={styles.label}>Location / Address</label>
                        <input
                            type="text"
                            id="location"
                            name="location"
                            value={formData.location}
                            onChange={handleChange}
                            className={styles.input}
                            placeholder="Where will the workshop take place?"
                        />
                    </div>

                    <div className={`${styles.formGroup} ${styles.fullWidth}`}>
                        <label htmlFor="message" className={styles.label}>Additional Notes</label>
                        <textarea
                            id="message"
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            className={styles.textarea}
                            placeholder="Tell us more about your needs, learning goals, or any questions..."
                            rows="4"
                        />
                    </div>

                    {submitError && (
                        <div className={styles.submitError}>
                            ⚠️ {submitError}
                        </div>
                    )}

                    <button 
                        type="submit" 
                        className={`${styles.submitButton} ${styles.fullWidth}`} 
                        disabled={isSubmitting}
                    >
                        {isSubmitting ? (
                            <>
                                <span className={styles.spinner}></span>
                                Submitting...
                            </>
                        ) : 'Submit Workshop Request'}
                    </button>
                    
                    <p className={styles.formNote}>
                        * Required fields. We'll contact you within 24-48 hours.
                    </p>
                </form>
            </div>
        </section>
    );
};

export default WorkshopInquiryForm;