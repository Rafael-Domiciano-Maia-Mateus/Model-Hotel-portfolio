import { useState } from 'react';
import Reveal from './Reveal';
import { socialLinks } from '../data/content';
import { MdLocationOn, MdPhone, MdEmail, MdAccessTime } from 'react-icons/md';
import { FaInstagram, FaFacebookF, FaWhatsapp, FaLinkedinIn } from 'react-icons/fa';
import './Contact.css';

const socialIcons = {
    instagram: FaInstagram,
    facebook: FaFacebookF,
    whatsapp: FaWhatsapp,
    linkedin: FaLinkedinIn,
};

export default function Contact() {
    const [status, setStatus] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        setStatus('Obrigado! Sua mensagem foi enviada e nossa equipe responderá em breve.');
    };

    return (
        <section id='contato' className='section'>
            <div className='container'>
                <div className='section-head'>
                    <Reveal>
                        <p className='eyebrow'>Contato</p>
                        <h2 className='section-title'>
                            Vamos planejar sua <em>próxima estadia</em>.
                        </h2>
                    </Reveal>
                </div>

                <div className='contact-grid'>
                    <Reveal variant='left'>
                        <form className='contact-form' onSubmit={handleSubmit} aria-label='Formulário de contato e reservas'>
                            <div className='form-row'>
                                <div className='form-field'>
                                    <label htmlFor='nome'>Nome</label>
                                    <input id='nome' name='nome' type='text' placeholder='Seu nome completo' required />
                                </div>
                                <div className='form-field'>
                                    <label htmlFor='email'>E-mail</label>
                                    <input id='email' name='email' type='email' placeholder='seuemail@exemplo.com' required />
                                </div>
                            </div>
                            <div className='form-field'>
                                <label htmlFor='telefone'>Telefone</label>
                                <input id='telefone' name='telefone' type='tel' placeholder='(00) 00000-0000' />
                            </div>
                            <div className='form-field'>
                                <label htmlFor='mensagem'>Mensagem</label>
                                <textarea
                                    id='mensagem'
                                    name='mensagem'
                                    rows={5}
                                    placeholder='Conte-nos as datas e o tipo de experiência que você procura'
                                    required
                                />
                            </div>
                            <button type='submit' className='btn btn-primary'>
                                Enviar Mensagem
                            </button>
                            {status && (
                                <p className='form-status' role='status'>
                                    {status}
                                </p>
                            )}
                        </form>
                    </Reveal>

                    <Reveal variant='right' className='contact-info'>
                        <div className='contact-info-item'>
                            <span className='contact-info-icon'>
                                <MdLocationOn size={22} />
                            </span>
                            <div>
                                <h4>Endereço</h4>
                                <p>Avenida do Horizonte, 1000 — Ubatuba, SP — Brasil</p>
                            </div>
                        </div>
                        <div className='contact-info-item'>
                            <span className='contact-info-icon'>
                                <MdPhone size={22} />
                            </span>
                            <div>
                                <h4>Telefone</h4>
                                <p>+55 (12) 99999-0000</p>
                            </div>
                        </div>
                        <div className='contact-info-item'>
                            <span className='contact-info-icon'>
                                <MdEmail size={22} />
                            </span>
                            <div>
                                <h4>E-mail</h4>
                                <p>reservas@hotelaurora.com.br</p>
                            </div>
                        </div>
                        <div className='contact-info-item'>
                            <span className='contact-info-icon'>
                                <MdAccessTime size={22} />
                            </span>
                            <div>
                                <h4>Horário de Atendimento</h4>
                                <p>Recepção 24 horas, todos os dias da semana</p>
                            </div>
                        </div>

                        <div className='contact-map'>
                            <iframe
                                title='Localização do Hotel Aurora no mapa'
                                src='https://www.google.com/maps?q=Ubatuba,SP,Brasil&output=embed'
                                loading='lazy'
                                referrerPolicy='no-referrer-when-downgrade'
                            />
                        </div>

                        <div className='contact-socials'>
                            {socialLinks.map((s) => {
                                const Icon = socialIcons[s.icon];
                                return (
                                    <a
                                        key={s.name}
                                        href={s.href}
                                        className='contact-social-link cursor-grow'
                                        target='_blank'
                                        rel='noopener noreferrer'
                                        aria-label={`Hotel Aurora no ${s.name}`}
                                    >
                                        <Icon size={18} />
                                    </a>
                                );
                            })}
                        </div>
                    </Reveal>
                </div>
            </div>
        </section>
    );
}
