export const Logo = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      viewBox="0 0 180 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      {/* Скрипичный ключ-иконка */}
      <circle cx="8" cy="20" r="4" fill="white" />
      <circle cx="8" cy="20" r="2" fill="#0a0a0a" />
      <line x1="8" y1="8" x2="8" y2="32" stroke="white" strokeWidth="1.5" />
      <line x1="4" y1="14" x2="12" y2="14" stroke="white" strokeWidth="1.5" />
      <line x1="4" y1="26" x2="12" y2="26" stroke="white" strokeWidth="1.5" />

      {/* КВАРТЕТ текст */}
      <text
        x="22"
        y="24"
        fontFamily="Arial, sans-serif"
        fontSize="14"
        fontWeight="600"
        letterSpacing="3"
        fill="white"
      >
        КВАРТЕТ
      </text>
    </svg>
  );
};
