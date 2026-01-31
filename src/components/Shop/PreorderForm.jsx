import React, { useState } from 'react';
import styles from './PreorderForm.module.css';

const PreorderForm = ({ productName, onCancel }) => {
    const [formData, setFormData] = useState({
        full_name: '',
        email: '',
        quantity: '1',
        message: ''
    });
    
    const [errors, setErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitted, setSubmitted] = useState(false);
    const [submitError, setSubmitError] = useState(null);

    // ✅ YOUR FORMPREE PRE-ORDER FORM URL
    const FORMPREE_URL = 'https://formspree.io/f/mdazrvrj';

    const validate = () => {
        const newErrors = {};
        if (!formData.full_name.trim()) newErrors.full_name = 'Full name is required';
        if (!formData.email.trim()) {
            newErrors.email = 'Email is required';
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = 'Email is invalid';
        }
        return newErrors;
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
        if (errors[name]) {
            setErrors(prev => ({ ...prev, [name]: null }));
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
            formDataToSend.append('Full Name', formData.full_name);
            formDataToSend.append('Email', formData.email);
            formDataToSend.append('Product', productName || 'Robotics Kit');
            formDataToSend.append('Quantity', formData.quantity);
            formDataToSend.append('Additional Message', formData.message || '');
            formDataToSend.append('Request Type', 'Pre-order');

            // ✅ Send to Formspree
            const response = await fetch(FORMPREE_URL, {
                method: 'POST',
                body: formDataToSend,
                headers: {
                    'Accept': 'application/json'
                }
            });

            if (response.ok) {
                setSubmitted(true);
                // Reset form
                setFormData({
                    full_name: '',
                    email: '',
                    quantity: '1',
                    message: ''
                });
            } else {
                const result = await response.json();
                throw new Error(result.error || 'Submission failed. Please try again.');
            }
            
        } catch (error) {
            console.error('Formspree submission error:', error);
            setSubmitError(error.message || 'Failed to submit pre-order. Please try again.');
        } finally {
            setIsSubmitting(false);
        }
    };

    if (submitted) {
        return (
            <div className={styles.success}>
                <span className={styles.successIcon}>✅</span>
                <h3>Pre-order Submitted Successfully!</h3>
                <p>Thank you for pre-ordering the <strong>{productName}</strong>.</p>
                <p>We have received your request and will contact you within 24-48 hours with payment and shipping details.</p>
                <p><small>Check your email for confirmation.</small></p>
                <div className={styles.successActions}>
                    <button className={styles.viewProductsBtn} onClick={onCancel}>
                        Browse More Products
                    </button>
                    <button className={styles.closeBtn} onClick={onCancel}>
                        Close
                    </button>
                </div>
            </div>
        );
    }

    return (
        <div className={styles.formContainer}>
            <h3 className={styles.title}>Pre-order: {productName}</h3>
            <p className={styles.subtitle}>Reserve your kit now. No payment required yet.</p>
            
            <form onSubmit={handleSubmit} className={styles.form}>
                <div className={styles.group}>
                    <label className={styles.label}>Full Name *</label>
                    <input 
                        type="text" 
                        name="full_name" 
                        required 
                        value={formData.full_name} 
                        onChange={handleChange} 
                        className={`${styles.input} ${errors.full_name ? styles.error : ''}`}
                        placeholder="John Doe" 
                    />
                    {errors.full_name && <span className={styles.errorMessage}>{errors.full_name}</span>}
                </div>
                
                <div className={styles.group}>
                    <label className={styles.label}>Email *</label>
                    <input 
                        type="email" 
                        name="email" 
                        required 
                        value={formData.email} 
                        onChange={handleChange} 
                        className={`${styles.input} ${errors.email ? styles.error : ''}`}
                        placeholder="john@example.com" 
                    />
                    {errors.email && <span className={styles.errorMessage}>{errors.email}</span>}
                </div>
                
                <div className={styles.group}>
                    <label className={styles.label}>Quantity</label>
                    <select 
                        name="quantity" 
                        value={formData.quantity} 
                        onChange={handleChange}
                        className={styles.select}
                    >
                        {[1, 2, 3, 4, 5].map(n => (
                            <option key={n} value={n}>{n} {n === 1 ? 'kit' : 'kits'}</option>
                        ))}
                    </select>
                </div>
                
                <div className={styles.group}>
                    <label className={styles.label}>Additional Message (Optional)</label>
                    <textarea 
                        name="message" 
                        value={formData.message} 
                        onChange={handleChange} 
                        className={styles.textarea}
                        placeholder="Any specific requests, questions, or customization needs?"
                        rows="3"
                    />
                </div>
                
                {submitError && (
                    <div className={styles.submitError}>
                        ⚠️ {submitError}
                    </div>
                )}
                
                <div className={styles.actions}>
                    <button 
                        type="button" 
                        className={styles.cancelBtn} 
                        onClick={onCancel}
                        disabled={isSubmitting}
                    >
                        Cancel
                    </button>
                    <button 
                        type="submit" 
                        className={styles.submitBtn} 
                        disabled={isSubmitting}
                    >
                        {isSubmitting ? (
                            <>
                                <span className={styles.spinner}></span>
                                Processing...
                            </>
                        ) : 'Confirm Pre-order'}
                    </button>
                </div>
                
                <p className={styles.formNote}>
                    * Required fields. This is a reservation only - we'll contact you for payment details.
                </p>
            </form>
        </div>
    );
};

export default PreorderForm;