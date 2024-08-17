import Card from "@/components/Sections/Blog/Card"

import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'

export default function Posts({ data }: any) {
    //console.log(data)

    return (
        <section>
            <Swiper
                spaceBetween={16}
                slidesPerView={1}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
                breakpoints={{
                    0: {
                        slidesPerView: 1,
                    },
                    480: {
                        slidesPerView: 1.5,
                        spaceBetween: 16,
                    },
                    640: {
                        slidesPerView: 2.5,
                        spaceBetween: 16,
                    },
                    1100: {
                        spaceBetween: 24,
                        slidesPerView: 2.5,
                        allowTouchMove: true,
                    },
                    1279: {
                        spaceBetween: 24,
                        slidesPerView: 3,
                        allowTouchMove: true,
                    }
                }}
            >

                {data?.map((i: any, ind: number) => (<SwiperSlide key={ind} ><Card data={i.attributes} slug={i.attributes.slug}></Card></SwiperSlide>))}

            </Swiper>


        </section>
    )
}