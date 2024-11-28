const handleScroll = (id: string) => {
  const element = document.getElementById(id);
  if (element) {
    const offset = 50;
    const elementTop = element.getBoundingClientRect().top;
    window.scrollBy({
      top: elementTop - offset,
      behavior: "smooth",
    });
  }
};

export { handleScroll };
