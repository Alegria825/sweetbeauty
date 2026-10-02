// Número real de WhatsApp de SweetBeauty (código de país + número, sin +)
const PHONE_NUMBER = "529610000000";

export function buildWhatsAppUrl(name, service) {
  const message = `¡Hola Sweet Beauty! ✨ Mi nombre es ${name} y me gustaría agendar una cita para el servicio de: ${service}. ¿Tienen disponibilidad?`;
  return `https://wa.me/${PHONE_NUMBER}?text=${encodeURIComponent(message)}`;
}