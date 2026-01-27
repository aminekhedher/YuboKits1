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

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
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
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Simulate API call
        setTimeout(() => {
            setIsSubmitting(false);
            setIsSuccess(true);
            // Reset form (optional)
            // setFormData({ ... });
        }, 1500);
    };

    if (isSuccess) {
        return (
            <section id="inquiry-form" className={styles.section}>
                <div className={styles.container}>
                    <div className={styles.successMessage}>
                        <h3>Thank You for Your Request!</h3>
                        <p>We have received your workshop inquiry and will be in touch shortly to discuss details and availability.</p>
                        <button
                            className={styles.submitButton}
                            style={{ marginTop: '1rem', width: 'auto' }}
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
                        <label htmlFor="name" className={styles.label}>Contact Name</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            className={styles.input}
                            placeholder="Ex: John Doe"
                        />
                    </div>

                    <div className={styles.formGroup}>
                        <label htmlFor="email" className={styles.label}>Email Address</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            className={styles.input}
                            placeholder="Ex: john@school.edu"
                        />
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
                        <label className={styles.label}>Interested In (Select all that apply)</label>
                        <div className={styles.checkboxGroup}>
                            <label className={styles.checkboxLabel}>
                                <input type="checkbox" value="classroom" onChange={handleCheckboxChange} className={styles.checkbox} />
                                Classroom Workshop
                            </label>
                            <label className={styles.checkboxLabel}>
                                <input type="checkbox" value="club" onChange={handleCheckboxChange} className={styles.checkbox} />
                                After-School Club
                            </label>
                            <label className={styles.checkboxLabel}>
                                <input type="checkbox" value="event" onChange={handleCheckboxChange} className={styles.checkbox} />
                                Special Event / Party
                            </label>
                            <label className={styles.checkboxLabel}>
                                <input type="checkbox" value="custom" onChange={handleCheckboxChange} className={styles.checkbox} />
                                Custom Program
                            </label>
                        </div>
                    </div>

                    <div className={styles.formGroup}>
                        <label htmlFor="groupSize" className={styles.label}>Est. Group Size & Age</label>
                        <input
                            type="text"
                            id="groupSize"
                            name="groupSize"
                            value={formData.groupSize}
                            onChange={handleChange}
                            className={styles.input}
                            placeholder="Ex: 25 students, 4th grade"
                        />
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
                        />
                    </div>

                    <button type="submit" className={`${styles.submitButton} ${styles.fullWidth}`} disabled={isSubmitting}>
                        {isSubmitting ? 'Sending...' : 'Submit Request'}
                    </button>
                </form>
            </div>
        </section>
    );
};

export default WorkshopInquiryForm;
