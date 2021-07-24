import React from 'react'
import { HeroContainer, HeroBg, HeroContent, HeroH1, InputIcon, InputContainer, InputField } from './HeroElements'
import { FaBeer } from 'react-icons/fa';

const Hero = () => {
    return (
        <>
            <HeroContainer>
                <HeroBg></HeroBg>
                <HeroContent>
                    <HeroH1>
                        Feel confident when
                        choosing a contractor
                        and your price
                    </HeroH1>
                    <InputContainer>
                        <InputField placeholder="Temukan Layanan Anda">
                        </InputField>
                    </InputContainer>


                </HeroContent>
            </HeroContainer>
        </>
    )
}

export default Hero
