export interface SectionProps {
  id: string;
  children: React.ReactNode;
}

export const Section = ({ id, children }: SectionProps) => {
  return (
    <section id={id} className="flex items-center justify-center">
      {children}
    </section>
  );
};
