const Footer = () => {
  return (
    <footer className="bg-deep-brown text-cream py-6">
      <div className="container-wide px-4 md:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div>
            <h3 className="font-display text-xl font-medium mb-1">
              Пучков Олег Петрович
            </h3>
            <p className="font-body text-cream/60 text-xs tracking-wide uppercase">
              Клинический психолог · Магистр психологии
            </p>
          </div>

          <div className="flex flex-col items-center md:items-end gap-1">
            <div className="flex items-center gap-4">
              <a href="tel:+79312173006" className="font-body text-sm text-cream/60 hover:text-cream transition-colors">
                +7 931 217-30-06
              </a>
              <span className="text-cream/30">|</span>
              <a href="https://t.me/Elephant_106_G" target="_blank" rel="noopener noreferrer" className="font-body text-sm text-cream/60 hover:text-cream transition-colors">
                Telegram
              </a>
            </div>
            <p className="font-body text-xs text-cream/40">
              © {new Date().getFullYear()} Все права защищены
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;