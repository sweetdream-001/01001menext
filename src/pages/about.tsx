import Head from "next/head";
import Link from "next/link";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { ScrollTop } from "../components/ScrollTop";
import { BiUserPin } from "react-icons/bi";
import { AiFillGithub } from "react-icons/ai";
import { RiWhatsappFill } from "react-icons/ri";
import { BsLinkedin } from "react-icons/bs";
import { GrMail } from "react-icons/gr";
import {
  TelegramLogo,
  ArrowLeft,
  ChatCenteredText,
  Image as IconImage,
  YoutubeLogo,
  Hash,
  InstagramLogo,
} from "phosphor-react";
import * as S from "../styles/about";
import { ButtonAlt, Section, Title, ButtonSecondary } from "../styles/styles";
import { Instagram } from "./api/Instagram";
import { useTranslation } from "react-i18next";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import React from "react";
import { Linkedin } from "./api/Linkedin";

const botkey = process.env.NEXT_PUBLIC_BOTKEY_URL;

interface DashboardPageProps {
  fallback: any;
}
export default function About() {
  const { t, i18n } = useTranslation("common"); // Use the 'common' namespace
  const router = useRouter();
  const [currentLang, setCurrentLang] = useState<"en" | "ta">("en");

  useEffect(() => {
    const { locale } = router;
    setCurrentLang(locale as "en" | "ta");
  }, [router.locale]);

  return (
    <>
      <Head>
        <title>
          {currentLang === "ta" ? "பற்றி | சரவணகுமார்" : "About | Sweetdream"}
        </title>
        <meta
          name="description"
          content={
            currentLang === "ta"
              ? "நான் சரவணகுமார், வேலம்மல் பொறியியல் கல்லூரியின் மாணவர், எலக்ட்ரானிக்ஸ் மற்றும் கம்யூனிகேஷன் இன்ஜினியரிங் படித்து வருகிறேன் மற்றும் தொழில்நுட்பத்தில் ஒரு வலுவான அடித்தளத்தை உருவாக்குகிறேன்."
              : "🚀 Your Vision, My Code — Let’s Build the Future"
          }
        />
        <meta
          property="og:title"
          content={
            currentLang === "ta" ? "பற்றி | சரவணகுமார்" : "About | Sweetdream"
          }
        />
        <meta
          property="og:description"
          content={
            currentLang === "ta"
              ? "நான் சரவணகுமார், வேலம்மல் பொறியியல் கல்லூரியின் மாணவர், எலக்ட்ரானிக்ஸ் மற்றும் கம்யூனிகேஷன் இன்ஜினியரிங் படித்து வருகிறேன் மற்றும் தொழில்நுட்பத்தில் ஒரு வலுவான அடித்தளத்தை உருவாக்குகிறேன்."
              : "🚀 Your Vision, My Code — Let’s Build the Future"
          }
        />
      </Head>

      <ScrollTop />
      <Section>
        <S.AboutContainer>
          <Title>
            <p>{currentLang === "ta" ? "../பற்றி" : "../about"} </p>
            {currentLang === "ta" ? "என்னைப் பற்றி!!" : "About Me"}
            <span>
              <BiUserPin /> {currentLang === "ta" ? "பற்றி" : "About"}
            </span>
          </Title>

          <S.AboutContent>
            <S.AboutImage>
              <img
                className="AboutImg"
                src="/justmeFull.jpg"
                alt="RaniyDream"
              />

              <div className="links">
              <ul>
                <Link
                  href={'https://github.com/sweetdream-001'}
                  target="_blank"
                  aria-label="Github">

                  <AiFillGithub size={25} />@SweetDre@m
                </Link>
                {/* <Link
                  href={'https://www.linkedin.com/in/saravanaramaswamy2003/'}
                  target="_blank"
                  aria-label="Linkedin">

                  <BsLinkedin size={25} />@saravanaramaswamy2003
                </Link> */}
                <Link
                  href={'https://t.me/devcoop1991'}
                  target="_blank"
                  aria-label="Telegram">

                  <TelegramLogo size={25} />Dev Coop
                </Link>
                {/* <Link
                  href={'https://api.whatsapp.com/send?phone=+13155476302'}
                  target="_blank"
                  aria-label="WhatsApp">

                  <RiWhatsappFill size={25} />+1 315 547 6302
                </Link> */}
                <Link
                  href={'mailto:sweetdream0828@gmail.com'}
                  className="email"
                  target="_blank"
                  aria-label="email">

                  <GrMail size={25} />sweetdream0828@gmail.com
                </Link>
              </ul>
            </div>

              <S.AboutContact>
                <h3>
                  {currentLang === "ta"
                    ? "நாம் பேசலாம், ஒருவேளை ஒரு அற்புதமான திட்டத்தை உருவாக்கலாம்?"
                    : "Lets talk, maybe create an amazing project together?"}
                </h3>
                <Link href={"/contact"}>
                  <ButtonAlt>
                    {currentLang === "ta" ? "தொடர்பு கொள்ளவும்" : "Contact Me"}
                  </ButtonAlt>
                </Link>
              </S.AboutContact>
            </S.AboutImage>
            <S.AboutDescription>
              <p style={{ textAlign: "justify" }}>
                {currentLang === "ta"
                  ? "👋 ."
                  : "🚀 Your Vision, My Code — Let’s Build the Future"}
              </p>
              <p style={{ textAlign: "justify" }}>
                {currentLang === "ta"
                  ? "💻 ."
                  : "💻Hi, I’m Eric Chen — a Senior AI/ML & Automation Engineer with 8+ years of experience transforming complex ideas into smart, scalable solutions."}
              </p>
              <p style={{ textAlign: "justify" }}>
                {currentLang === "ta"
                  ? "🎉  💥."
                  : "🎉 I specialize in integrating AI and backend automation to build powerful platforms that solve real-world problems. My toolbox includes Python, Node.js, FastAPI, and modern frameworks like React and Next.js — plus automation magic with tools like n8n, Zapier, HubSpot, GoHighLevel, and GPT-4."}
              </p>
              <p style={{ textAlign: "justify" }}>
                {currentLang === "ta"
                  ? "🧩 என் நேரத்தில், புதிர்கள் மற்றும் மூளைக்கவசங்களை தீர்க்க நான் விரும்புகிறேன், இது எனக்கு கூர்மையாகவும் என் பிரச்சினை தீர்க்கும் திறன்களை சரியாக வைத்திருக்கவும் உதவுகிறது. உலகம் முழுவதும் புராணங்கள் மற்றும் புராணங்களை கற்றுக்கொள்வதில் நான் பெரிய ரசிகன், இது எனக்கு பல்வேறு கலாச்சாரங்கள் மற்றும் பாரம்பரியங்களைப் பற்றிய ஒரு பார்வையை அளிக்கிறது 🌍."
                  : "🧩 From creating CRMs that talk to your customers intelligently, to developing eCommerce systems that sync in real time, I build full-stack solutions that are fast, clean, and future-ready."}
              </p>
              <p style={{ textAlign: "justify" }}>
                {currentLang === "ta"
                  ? "🙌"
                  : "🎓 Educated at NTU (2013–2017) with a degree in Computer Engineering, I’ve built my career on solid fundamentals and hands-on experience — and I'm always solving problems with a builder's mindset."}
              </p>
              <p style={{ textAlign: "justify" }}>
                {currentLang === "ta"
                  ? "💪ம்🤝."
                  : "💡 Outside work, I thrive on puzzles, basketball, and late-night debugging sessions with lofi beats and coffee."}
              </p>
              <p style={{ textAlign: "justify" }}>
                {currentLang === "ta"
                  ? "💪ம்🤝."
                  : "✨ Now, I’m excited to take on my next big adventure as a co-founder — blending solid engineering with cutting-edge AI to build something truly impactful. If you’re looking for someone who can turn ideas into powerful, real-world tech, let’s team up and make it happen. "}
              </p>
              <p style={{ textAlign: "justify" }}>
                {currentLang === "ta"
                  ? "💪ம்🤝."
                  : "🤝 Let’s connect — and make something exceptional. "}
              </p>
            </S.AboutDescription>
          </S.AboutContent>
        </S.AboutContainer>

        {/* Social Begins */}

        {/* <Title>
        {currentLang === 'ta' ? 'LinkedIn பதிவு' : 'LinkedIn Post'}
        <span>
          <BsLinkedin /> {currentLang === 'ta' ? 'சமீபத்திய' : 'Latest'}
        </span>
      </Title>
      <S.InBox>
        <Linkedin />
      </S.InBox>
      <Title>
        {currentLang === 'ta' ? 'இன்ஸ்டாகிராம் பதிவு' : 'Instagram Post'}
        <span>
          < InstagramLogo /> {currentLang === 'ta' ? 'சமீபத்திய' : 'Latest'}
        </span>
      </Title>
      <S.InBox>
        <Instagram />
      </S.InBox>
      <a style={{ textAlign: 'center' }}>
        {currentLang === 'ta' ? 'உங்கள் ❤️ ஐ காட்டுங்கள், விரும்பி கருத்து தெரிவிப்பதன் மூலம், மேலும் புதுப்பிப்புகளுக்கு எனது இன்ஸ்டாகிராமில் என்னை பின்தொடருங்கள்.' : 'Show your ❤️ by liking and commenting, Follow me on Instagram for more updates.'}
      </a> */}

        {/* Social Ends */}

        <Link href={"/#home"} legacyBehavior>
          <ButtonSecondary>
            <a>
              <ArrowLeft
                style={{ marginBottom: "-0.2rem" }}
                weight="bold"
                size={18}
              />{" "}
              {currentLang === "ta" ? "திரும்பி செல்" : "Go Back"}
            </a>
          </ButtonSecondary>
        </Link>
      </Section>
      <script src="https://cdn.botpress.cloud/webchat/v2.2/inject.js"></script>
      <script src={botkey} defer></script>
      <Footer />
    </>
  );
}
