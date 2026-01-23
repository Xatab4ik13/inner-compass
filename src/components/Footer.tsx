import freudImage from "@/assets/freud-portrait.jpg";

const Footer = () => {
  return (
    <footer className="bg-deep-brown text-cream py-12 relative overflow-hidden">
      {/* Decorative Freud portrait */}
      <div className="absolute left-0 bottom-0 opacity-10 pointer-events-none">
        <img src={freudImage} alt="" className="w-48 h-auto" />
      </div>

      <div className="container-wide px-4 md:px-8 relative">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="font-display text-2xl font-medium mb-2">
              Олег Петрович
            </h3>
            <p className="font-body text-cream/70 text-sm">
              Клинический психолог · Магистр психологии
            </p>
          </div>

          <div className="flex flex-col items-center md:items-end gap-2">
            <div className="flex items-center gap-4">
              <a
                href="tel:+79312173006"
                className="font-body text-sm text-cream/70 hover:text-cream transition-colors"
              >
                +7 931 217-30-06
              </a>
              <span className="text-cream/30">|</span>
              <a
                href="https://t.me/Elephant_106_G"
                target="_blank"
                rel="noopener noreferrer"
                className="font-body text-sm text-cream/70 hover:text-cream transition-colors"
              >
                Telegram
              </a>
            </div>
            <p className="font-body text-xs text-cream/50">
              © {new Date().getFullYear()} Все права защищены
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
