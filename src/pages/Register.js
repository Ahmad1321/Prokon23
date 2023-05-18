import { useEffect } from "react";
import CreateAccountForm from "../components/CreateAccountForm";
import Footer from "../components/Footer";
import NavbarContainer from "../components/NavbarBL";

const Register = () => {
  useEffect(() => {
    const scrollAnimElements = document.querySelectorAll(
      "[data-animate-on-scroll]"
    );
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting || entry.intersectionRatio > 0) {
            const targetElement = entry.target;
            targetElement.classList.add("animate");
            observer.unobserve(targetElement);
          }
        }
      },
      {
        threshold: 0.15,
      }
    );

    for (let i = 0; i < scrollAnimElements.length; i++) {
      observer.observe(scrollAnimElements[i]);
    }

    return () => {
      for (let i = 0; i < scrollAnimElements.length; i++) {
        observer.unobserve(scrollAnimElements[i]);
      }
    };
  }, []);

  return (
    <div
      className="relative bg-azure w-full h-[1648px] overflow-hidden [&.animate]:animate-[0.25s_ease_0s_1_normal_forwards_slide-in-left] opacity-[0]"
      data-animate-on-scroll
    >
      <div className="absolute top-[284px] left-[20%] w-[1236px] h-[998px]">
        <div className="absolute top-[0px] left-[0px] bg-base-white w-[1236px] h-[998px]" />
        <CreateAccountForm />
        <div className="absolute top-[646px] left-[503px]" />
        <img
          className="absolute top-[230px] left-[25px] w-[402px] h-[510px] object-cover"
          alt=""
          src="/logi-bi-baru-11@2x.png"
        />
      </div>
      <Footer />
      <NavbarContainer />
    </div>
  );
};

export default Register;
