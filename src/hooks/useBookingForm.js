import { useState, useEffect } from 'react';
import { buildWhatsAppUrl } from '../lib/whatsapp';

export function useBookingForm(initialService = '') {
  const [formData, setFormData] = useState({ name: '', service: initialService });

  // Sincroniza cuando el usuario pulsa "Elegir" en una tarjeta
  useEffect(() => {
    if (initialService) {
      setFormData(prev => ({ ...prev, service: initialService }));
    }
  }, [initialService]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.service) {
      alert('Por favor, completa los campos para agendar tu cita.');
      return;
    }
    window.open(buildWhatsAppUrl(formData.name, formData.service), '_blank');
  };

  return { formData, handleInputChange, handleSubmit };
}