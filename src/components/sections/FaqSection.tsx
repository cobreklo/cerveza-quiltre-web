import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { motion } from "framer-motion";

const faqs = [
  {
    question: "¿Cómo realizo un pedido?",
    answer: "Escríbenos a WhatsApp, coordina tu pedido y paga vía transferencia.",
  },
  {
    question: "¿Zonas de reparto?",
    answer: "Repartimos gratis en Cerrillos y con recargo en resto de Santiago.",
  },
  {
    question: "¿Medios de pago?",
    answer: "Transferencia electrónica o efectivo contra entrega.",
  },
];

const FaqSection = () => {
  return (
    <section className="py-20 bg-background" id="faq">
      <div className="container px-4 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto"
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
              Preguntas Frecuentes
            </h2>
            <p className="text-muted-foreground">
              Resolvemos tus dudas para que disfrutes de la mejor cerveza.
            </p>
          </div>

          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left text-lg font-medium">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
};

export default FaqSection;
