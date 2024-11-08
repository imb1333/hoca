function changeBackgroundImage() {
    const images = [
      "aquarium/nen-chinh.jpg",
      "",
      "",
      ""
    ];
    const randomImage = images[Math.floor(Math.random() * images.length)];
    document.body.style.backgroundImage = `url('${randomImage}')`;
  }