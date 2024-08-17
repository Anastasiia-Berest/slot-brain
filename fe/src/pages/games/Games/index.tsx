import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import Card from "@/components/Sections/Games/Card-default"


export default function Slider({ data }: any) {
    return (
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
                    slidesPerView: 4,
                    allowTouchMove: true,
                },
                1280: {
                    spaceBetween: 24,
                    slidesPerView: 5,
                    allowTouchMove: true,
                }
            }}
        >

            {data?.map((i: any, ind: number) => (<SwiperSlide key={ind} ><Card data={i.attributes} slug={`/games/${i.attributes.slug}`}></Card></SwiperSlide>))}

        </Swiper>
    )
}