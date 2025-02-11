/* eslint-disable @next/next/no-img-element */
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Typewriter from 'typewriter-effect'
import { Button, ButtonPrimary, Container } from '../../styles/styles'
import { Content, ImgHome, HomeText } from './styles'
import { FiArrowRight } from 'react-icons/fi'
import { useState } from 'react';
import Modal from 'react-modal';
import { useTranslation } from 'react-i18next';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

Modal.setAppElement('#__next');

export function HomeHero() {
  const { t } = useTranslation('common');
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const router = useRouter();
  const [currentLang, setCurrentLang] = useState<'en' | 'ta'>('en');

  useEffect(() => {
    const { locale } = router;
    setCurrentLang(locale as 'en' | 'ta');
  }, [router.locale]);

  function openModal() {
    setModalIsOpen(true);
  }

  function closeModal() {
    setModalIsOpen(false);
  }

  return (
    <Container>
      <Content>
        <HomeText>
          <p>
            <span>👋🏻</span> {currentLang === 'ta' ? 'வணக்கம், எனது பெயர்' : 'Hello, my name is'}
          </p>
          <h1>
            {currentLang === 'ta' ? 'சரவணகுமார் ரா' : 'Keston Atwater'}  
            <span className="animation">
              <Image
                width={200}
                height={200}
                src="/vectors/triangle.svg"
                alt="triangle"
                loading='lazy'
              />
            </span>
          </h1>
          <h2>
            <Typewriter
              options={{
                strings: [currentLang === 'ta' ? 'டெவலப்பர் | பேச்சாளர் | தன்னார்வலர்' : ' Sr.Full Stack Developer | Web Designer '],
                autoStart: true,
                loop: true,
              }}
            />
          </h2>

          <div className="button">
            <ButtonPrimary>
              <Link href={'/projects'}><b>{currentLang === 'ta' ? 'எனது கதையைப் பார்க்கவும்' : 'See my Portfolio'}</b></Link> 
              <FiArrowRight style={{ marginBottom: '-0.3rem' }} size={20} />
            </ButtonPrimary>

          </div>
        </HomeText>
        <ImgHome>
          <img className="home-img" src="/home.png" alt={currentLang === 'ta' ? 'முகப்பு படம்' : 'Image Home'} />

          <div className="code">
            <Image
              width={150}
              height={150}
              src="/vectors/dino.svg"
              alt="dino"
              loading="lazy"
            />
          </div>
        </ImgHome>
      </Content>
    </Container>
  )
}