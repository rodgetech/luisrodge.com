type SectionLabelProps = {
  children: React.ReactNode;
};

export function SectionLabel({ children }: SectionLabelProps) {
  return <h2 className="section-label">{children}</h2>;
}
