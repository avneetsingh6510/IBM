document.addEventListener("DOMContentLoaded", () => {
  const problemSection = document.querySelector(".Problemsection");
  const problemHeading = problemSection.querySelector("h1");
  const problemImageContainer = problemSection.querySelector(".images");
  const solutionSection = document.querySelector(".Solutionsection");
  const solutionHeadingContainer = solutionSection.querySelector(
    ".solution-heading-container"
  );
  const solutionImageContainer = solutionSection.querySelector(".images");
  const SolutionSectionBtn = solutionSection.querySelector(
    ".animated-button-dark"
  );

  const problemImageSets = {
    problem1: {
      images: ["images/problem2.jpg", "images/problem3.jpg", "images/problem4.jpg"],
      descriptions: ["Pollution", "Climate Change", "Habitat Destruction"],
      order: ["1", "2", "3"],
    },
    problem2: {
      images: ["images/problem3.jpg", "images/problem4.jpg", "images/problem5.jpg"],
      descriptions: [
        "Climate Change",
        "Habitat Destruction",
        "Bycatch & Illegal fishing",
      ],
      order: ["1", "2", "3"],
    },
    problem3: {
      images: ["images/problem4.jpg", "images/problem5.jpg", "images/problem1.jpg"],
      descriptions: [
        "Habitat Destruction",
        "Bycatch & Illegal fishing",
        "Overfishing",
      ],
      order: ["1", "2", "3"],
    },
    problem4: {
      images: ["images/problem5.jpg", "images/problem1.jpg", "images/problem2.jpg"],
      descriptions: ["Bycatch & Illegal fishing", "Overfishing", "Pollution"],
      order: ["1", "2", "3"],
    },
    problem5: {
      images: ["images/problem1.jpg", "images/problem2.jpg", "images/problem3.jpg"],
      descriptions: ["Overfishing", "Pollution", "Climate Change"],
      order: ["1", "2", "3"],
    },
  };

  const solutionImageSets = {
    solution1: {
      images: ["images/solution2.jpg", "images/solution3.jpg", "images/solution4.jpg"],
      descriptions: [
        "Sustainable Fishing Practices",
        "Pollution Control Initiatives",
        "Climate Action",
      ],
      order: ["1", "2", "3"],
    },
    solution2: {
      images: ["images/solution3.jpg", "images/solution4.jpg", "images/solution5.jpg"],
      descriptions: [
        "Pollution Control Initiatives",
        "Climate Action",
        "Conservation Projects",
      ],
      order: ["1", "2", "3"],
    },
    solution3: {
      images: ["images/solution4.jpg", "images/solution5.jpg", "images/solution6.jpg"],
      descriptions: [
        "Climate Action",
        "Conservation Projects",
        "Policy & Advocacy",
      ],
      order: ["1", "2", "3"],
    },
    solution4: {
      images: ["images/solution5.jpg", "images/solution6.jpg", "images/solution1.jpg"],
      descriptions: [
        "Conservation Projects",
        "Policy & Advocacy",
        "Marine Protected Areas",
      ],
      order: ["1", "2", "3"],
    },
    solution5: {
      images: ["images/solution6.jpg", "images/solution1.jpg", "images/solution2.jpg"],
      descriptions: [
        "Policy & Advocacy",
        "Marine Protected Areas",
        "Sustainable Fishing Practices",
      ],
      order: ["1", "2", "3"],
    },
    solution6: {
      images: ["images/solution1.jpg", "images/solution2.jpg", "images/solution3.jpg"],
      descriptions: [
        "Marine Protected Areas",
        "Sustainable Fishing Practices",
        "Pollution Control Initiatives",
      ],
      order: ["1", "2", "3"],
    },
  };

  const problemImageWrappers = Array.from(
    problemImageContainer.querySelectorAll(".image-wrapper")
  );
  const solutionImageWrappers = Array.from(
    solutionImageContainer.querySelectorAll(".image-wrapper")
  );

  problemImageWrappers.forEach((wrapper) => {
    wrapper.addEventListener("click", (event) => {
      event.preventDefault();

      const clickedImageSrc = wrapper.querySelector("img").src;
      const problemName = wrapper.querySelector(".overlay").textContent;

      const imageKey = Object.keys(problemImageSets).find((key) =>
        clickedImageSrc.includes(key)
      );

      const newImages = problemImageSets[imageKey]?.images || [];
      const newDescriptions = problemImageSets[imageKey]?.descriptions || [];

      problemSection.style.backgroundImage = `url(${clickedImageSrc})`;
      problemSection.style.backgroundSize = "cover";
      problemSection.style.backgroundPosition = "center";
      problemSection.style.backgroundRepeat = "no-repeat";
      problemHeading.textContent = problemName;

      const currentWrappers = Array.from(
        problemImageContainer.querySelectorAll(".image-wrapper")
      );
      currentWrappers.forEach((wrapper, index) => {
        if (index < newImages.length) {
          const newImage = newImages[index];
          const newDescription = newDescriptions[index];

          wrapper.querySelector("img").src = newImage;
          wrapper.querySelector(".overlay").textContent = newDescription;
        }
      });
    });
  });

  solutionImageWrappers.forEach((wrapper) => {
    wrapper.addEventListener("click", (event) => {
      event.preventDefault();

      const clickedImageSrc = wrapper.querySelector("img").src;
      const solutionName = wrapper.querySelector(".overlay").textContent;

      const imageKey = Object.keys(solutionImageSets).find((key) =>
        clickedImageSrc.includes(key)
      );

      const newImages = solutionImageSets[imageKey]?.images || [];
      const newDescriptions = solutionImageSets[imageKey]?.descriptions || [];

      solutionSection.style.backgroundImage = `url(${clickedImageSrc})`;
      solutionSection.style.backgroundSize = "cover";
      solutionSection.style.backgroundPosition = "center";
      solutionSection.style.backgroundRepeat = "no-repeat";
      solutionHeadingContainer.querySelector("h1").textContent = solutionName;

      SolutionSectionBtn.style.color = "#89d2f0";
      SolutionSectionBtn.style.boxShadow = "0 0 0 5px #89d2f0";

      const currentWrappers = Array.from(
        solutionImageContainer.querySelectorAll(".image-wrapper")
      );
      currentWrappers.forEach((wrapper, index) => {
        if (index < newImages.length) {
          const newImage = newImages[index];
          const newDescription = newDescriptions[index];

          wrapper.querySelector("img").src = newImage;
          wrapper.querySelector(".overlay").textContent = newDescription;
        }
      });
    });
  });
});
