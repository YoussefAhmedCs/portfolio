import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { AiOutlineMail, AiOutlineEnvironment, AiOutlineLoading3Quarters } from "react-icons/ai";
import { FaWhatsapp } from "react-icons/fa";
import Particle from "../Particle";

const STATICFORMS_ENDPOINT = "https://api.staticforms.dev/submit";
const STATICFORMS_API_KEY = process.env.REACT_APP_STATICFORMS_API_KEY || "";

const initialForm = {
    name: "",
    email: "",
    subject: "",
    message: "",
    country: "",
};

function Contact() {
    const [formData, setFormData] = useState(initialForm);
    const [errors, setErrors] = useState({});
    const [status, setStatus] = useState({
        submitting: false,
        submitted: false,
        error: "",
    });

    const validateForm = () => {
        const nextErrors = {};

        if (!formData.name.trim()) {
            nextErrors.name = "Name is required";
        }

        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!formData.email.trim()) {
            nextErrors.email = "Email is required";
        } else if (!emailPattern.test(formData.email.trim())) {
            nextErrors.email = "Enter a valid email address";
        }

        if (!formData.message.trim()) {
            nextErrors.message = "Message is required";
        } else if (formData.message.trim().length < 10) {
            nextErrors.message = "Message should be at least 10 characters";
        }

        setErrors(nextErrors);
        return Object.keys(nextErrors).length === 0;
    };

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));

        if (errors[name]) {
            setErrors((prev) => ({
                ...prev,
                [name]: "",
            }));
        }

        if (status.error) {
            setStatus((prev) => ({
                ...prev,
                error: "",
            }));
        }
    };


    const getUserLocation = async () => {
        try {
            const response = await fetch("https://ip.hackclub.com/ip");
            const data = await response.json();

            return {
                country: data.country_name || "Unknown",
                city: data.city_name || "Unknown",
                ip: data.ip || "",
            };
        } catch (error) {
            console.error("Location error:", error);

            return {
                country: "Unknown",
                city: "Unknown",
                ip: "",
            };
        }
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!validateForm()) {
            return;
        }

        if (!STATICFORMS_API_KEY) {
            setStatus({
                submitting: false,
                submitted: false,
                error: "Missing REACT_APP_STATICFORMS_API_KEY in your environment.",
            });
            return;
        }

        setStatus({
            submitting: true,
            submitted: false,
            error: "",
        });

        try {

            const location = await getUserLocation();

            const response = await fetch(STATICFORMS_ENDPOINT, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    ...formData,

                    country: location.country,
                    city: location.city,
                    ip: location.ip,

                    apiKey: STATICFORMS_API_KEY,
                    replyTo: formData.email,
                    honeypot: "",
                }),
            });

            const result = await response.json();

            if (!response.ok || !result.success) {
                throw new Error(result?.message || "Form submission failed");
            }

            setFormData(initialForm);
            setStatus({
                submitting: false,
                submitted: true,
                error: "",
            });
        } catch (submissionError) {
            setStatus({
                submitting: false,
                submitted: false,
                error: submissionError.message,
            });
        }
    };

    return (
        <Container fluid className="contact-section">
            <Particle />
            <Container>
                <Row className="justify-content-center">
                    <Col lg={10} xl={9}>
                        <div className="contact-shell">
                            <Row className="g-0">
                                <Col md={5} className="contact-panel contact-panel-info">
                                    <p className="contact-eyebrow">Contact</p>
                                    <h1 className="contact-title">
                                        Send me a <span className="purple">message</span>
                                    </h1>
                                    <p className="contact-text">
                                        Use this form to send feedback, discuss open-source work,
                                        or talk about projects, services, or anything else.
                                    </p>

                                    {/* <a
                                        className="contact-info-item contact-info-item-email"
                                        href="mailto:youssef.ahmed.fci@gmail.com"
                                    >
                                        <span className="contact-info-icon">
                                            <AiOutlineMail />
                                        </span>
                                        <span className="contact-info-content">
                                            <span className="contact-info-label">Email me</span>
                                            <span className="contact-info-value">
                                                youssef.ahmed.fci@gmail.com
                                            </span>
                                        </span>
                                    </a> */}
                                    <div className="contact-info-item">
                                        <FaWhatsapp />
                                        <span>+20 127 767 2245</span>
                                    </div>
                                    {/* <div className="contact-info-item">
                                        <AiOutlineEnvironment/>
                                        <span>Cairo, Egypt</span>
                                    </div> */}

                                    <div className="contact-note">
                                        All messages are sent to me by Telegram bot.
                                    </div>
                                </Col>

                                <Col md={7} className="contact-panel contact-panel-form">
                                    <h2 className="contact-form-title">Get in touch</h2>
                                    <p className="contact-form-subtitle">
                                        Have a project in mind? Let&apos;s talk.
                                    </p>

                                    {status.submitted && (
                                        <div className="contact-alert contact-alert-success">
                                            Message sent successfully. I&apos;ll get back to you soon.
                                        </div>
                                    )}

                                    {status.error && (
                                        <div className="contact-alert contact-alert-error">{status.error}</div>
                                    )}

                                    <form className="contact-form" onSubmit={handleSubmit} noValidate>
                                        <div className="form-group">
                                            <label htmlFor="name">
                                                Name <span className="required">*</span>
                                            </label>
                                            <input
                                                id="name"
                                                name="name"
                                                type="text"
                                                value={formData.name}
                                                onChange={handleChange}
                                                className={errors.name ? "error" : ""}
                                                placeholder="Your name"
                                            />
                                            {errors.name && <span className="error-message">{errors.name}</span>}
                                        </div>

                                        <div className="form-group">
                                            <label htmlFor="email">
                                                Email <span className="required">*</span>
                                            </label>
                                            <input
                                                id="email"
                                                name="email"
                                                type="email"
                                                value={formData.email}
                                                onChange={handleChange}
                                                className={errors.email ? "error" : ""}
                                                placeholder="your.email@example.com"
                                            />
                                            {errors.email && <span className="error-message">{errors.email}</span>}
                                        </div>

                                        <div className="form-group">
                                            <label htmlFor="subject">Subject</label>
                                            <input
                                                id="subject"
                                                name="subject"
                                                type="text"
                                                value={formData.subject}
                                                onChange={handleChange}
                                                placeholder="What's this about?"
                                            />
                                        </div>

                                        <div className="form-group">
                                            <label htmlFor="message">
                                                Message <span className="required">*</span>
                                            </label>
                                            <textarea
                                                id="message"
                                                name="message"
                                                value={formData.message}
                                                onChange={handleChange}
                                                className={errors.message ? "error" : ""}
                                                placeholder="Tell me about your idea..."
                                            />
                                            {errors.message && (
                                                <span className="error-message">{errors.message}</span>
                                            )}
                                        </div>

                                        <button type="submit" className="submit-button" disabled={status.submitting}>
                                            {status.submitting ? (
                                                <>
                                                    <AiOutlineLoading3Quarters className="spin-icon" /> Sending...
                                                </>
                                            ) : (
                                                "Send Message"
                                            )}
                                        </button>
                                    </form>
                                </Col>
                            </Row>
                        </div>
                    </Col>
                </Row>
            </Container>
        </Container>
    );
}

export default Contact;
