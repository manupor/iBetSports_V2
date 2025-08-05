"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { useEffect } from "react"

interface SportsbookTabContentProps {
  setIsRegistrationOpen?: () => void
}

export default function SportsbookTabContent({ setIsRegistrationOpen }: SportsbookTabContentProps) {
  useEffect(() => {
    // Preload the iframe content
    const link = document.createElement("link")
    link.rel = "preload"
    link.href = "https://betslip.ibetsports.com/mainbk/betslip"
    link.as = "document"
    document.head.appendChild(link)

    return () => {
      document.head.removeChild(link)
    }
  }, [])

  return (
    <div className="min-h-screen bg-brand-charcoal-black font-poppins">
      {/* Hero Section */}
      <section className="relative w-full">
        {/* Mobile Hero Layout - Image first, then text below */}
        <div className="block md:hidden">
          {/* Mobile Hero Image */}
          <div className="relative w-full h-48 sm:h-56 overflow-hidden">
            <Image
              src="/images/jugador-de-futbol-americano-de-estilo-neon.jpg"
              alt="Neon style American football player"
              fill
              className="object-cover object-center"
              priority
              sizes="100vw"
            />
          </div>

          {/* Mobile Hero Text Content */}
          <div className="bg-brand-charcoal-black py-8 px-4 text-center">
            <div className="space-y-4">
              <h1 className="text-2xl sm:text-3xl font-black text-brand-soft-white">
                GAME ON.
                <span className="block">BET BIG, WIN BIGGER.</span>
              </h1>
              <p className="text-lg sm:text-xl text-white">
                From NFL to NBA, MLB to NHL—every game, every bet, every win starts here.
              </p>
              <Button
                onClick={setIsRegistrationOpen}
                className="bg-gradient-to-r from-brand-primary-green to-brand-vibrant-green hover:from-brand-vibrant-green hover:to-brand-primary-green text-brand-charcoal-black font-black px-8 py-3 text-lg rounded-lg transition-all duration-300"
              >
                START BETTING
              </Button>
            </div>
          </div>
        </div>

        {/* Desktop Hero Layout - Overlay design */}
        <div className="hidden md:block relative w-full h-80 md:h-96 lg:h-[28rem] xl:h-[32rem] overflow-hidden">
          <Image
            src="/images/jugador-de-futbol-americano-de-estilo-neon.jpg"
            alt="Neon style American football player"
            fill
            className="object-cover object-center"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/60 to-transparent" />
          <div className="absolute inset-0 flex items-center justify-start pl-6 lg:pl-12">
            <div className="text-left space-y-4">
              <h1 className="text-4xl md:text-6xl font-black text-brand-soft-white">
                GAME ON.
                <span className="block">BET BIG, WIN BIGGER.</span>
              </h1>
              <p className="text-xl md:text-2xl text-white">
                From NFL to NBA, MLB to NHL—every game, every bet, every win starts here.
              </p>
              <Button
                onClick={setIsRegistrationOpen}
                className="bg-gradient-to-r from-brand-primary-green to-brand-vibrant-green hover:from-brand-vibrant-green hover:to-brand-primary-green text-brand-charcoal-black font-black px-8 py-3 text-lg rounded-lg transition-all duration-300"
              >
                START BETTING
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Sportsbook Iframe */}
      <section className="w-full h-screen">
        <iframe
          src="https://betslip.ibetsports.com/mainbk/betslip"
          className="w-full h-full border-none"
          title="Sportsbook"
          loading="eager"
          allow="fullscreen"
          style={{
            minHeight: "100vh",
            background: "#000",
          }}
        />
        <style jsx>{`
          @media (min-width:1025px){
            .sportbet-header .menu-login-item, 
            .winsport724-header #top-bar{
              display:none
            }
            .winsport724-header .navbar{
              background:0 0!important
            }
          }
          @media (max-width:575px){
            .main_theme4{
              padding-bottom:25%
            }
          }
          p#abc-msg-login, 
          p#camanbetme-msg-login, 
          p#camanbetus-msg-login, 
          p#jazz-msg-login, 
          p#ll-msg-login{
            font-size:13px;
            color:#c5b959;
            text-align:center;
            display:none
          }
          p#camanbetme-msg-login a{
            color:#fe8500!important
          }
          p#abc-msg-login a, 
          p#jazz-msg-login a, 
          p#ll-msg-login a{
            color:#fff9ad
          }
          .defaultTheme, 
          .theme3, 
          .theme4{
            display:none
          }
          @media (max-width:1024px){
            .winsport724-header #top-bar{
              display:none
            }
            .winsport724-header .navbar{
              background:0 0!important
            }
            .theme3, 
            .theme4{
              display:block
            }
          }
          app-jazz-store{
            position:absolute;
            width:100%;
            padding-bottom:100px
          }
          .feedback{
            height:0;
            width:85px;
            position:fixed;
            right:0;
            top:50%;
            z-index:1000;
            filter:progid:DXImageTransform.Microsoft.BasicImage(rotation=3)
          }
          .feedback a{
            display:block;
            height:52px;
            padding-top:15px;
            width:115px;
            text-align:center;
            color:#fff;
            font-family:Arial,sans-serif;
            font-size:10px;
            font-weight:700;
            text-decoration:none;
            border-radius:15px;
            border-bottom:1px solid #36dbed
          }
          .feedback a.betvip-bubble{
            display:inline
          }
          .feedback img{
            position:relative;
            right:5px;
            top:2px;
            padding:10px;
            border-radius:15px;
            border-bottom:1px solid #36dbed
          }
          .feedback .streaming{
            width:50px;
            height:50px;
            padding:8px 7px 18px;
            border-radius:15px;
            text-align:center;
            line-height:1.42857;
            font-size:24px;
            transform:rotate(0);
            -webkit-transform:rotate(0);
            color:#fff;
            border-bottom:1px solid #19212f
          }
          .feedback .bubble{
            background:linear-gradient(180deg,#af884c 0,#c6a058 49%,#5b3c1a 100%)!important
          }
          .feedback .streaming, 
          .feedback a, 
          .feedback img{
            background:linear-gradient(90deg,#000000fa,#21a1c9e3 45%,#000000de);
            transition:all .5s ease-in-out;
            -webkit-animation:2s ease-in-out infinite blink;
            animation:2s ease-in-out infinite blink
          }
          .minigames{
            top:62%;
            right:5px
          }
          .minigames-mobile{
            padding:15px 5px 18px!important
          }
          .modal{
            z-index:7000!important
          }
          .modal-content-dark{
            background-color:#000
          }
          .modal-header{
            border-bottom:1px solid #1e1e1e
          }
          @-webkit-keyframes blink{
            0%,100%{opacity:1}
            50%{opacity:.5}
          }
          @keyframes blink{
            0%,100%{opacity:1}
            50%{opacity:.5}
          }
          .bs-canvas{
            top:0;
            z-index:7110;
            width:430px;
            transition:margin .4s ease-out;
            -webkit-transition:margin .4s ease-out;
            -moz-transition:margin .4s ease-out;
            -ms-transition:margin .4s ease-out
          }
          .bs-canvas-right{
            right:0;
            margin-right:-100%
          }
          #miniBJIframe{
            width:100%;
            height:90vh;
            overflow:hidden;
            border:1px solid #ccc;
            margin-top:10px
          }
          .boundary{
            position:fixed;
            top:66px;
            right:5px;
            width:0;
            height:90vh;
            z-index:10000
          }
          .bluebox{
            position:fixed;
            top:50%;
            z-index:1000;
            right:-60px
          }
          .bluebox-img{
            position:fixed;
            top:60%;
            z-index:1000;
            right:-60px
          }
          .chatbubble{
            top:72%
          }
          .margintest{
            margin-left:-50px
          }
          .noMargin{
            margin-left:-40px
          }
          .tab-pane{
            display:none
          }
          .nav-pills .nav-link:hover{
            background-color:#000!important;
            border-radius:12px
          }
          .nav-pills .nav-link.active{
            background-color:#000!important;
            color:#fff
          }
          .nav-pills .nav-link.active .live-diamond-modal__count{
            color:#fff
          }
          .nav-pills .nav-link.active:hover{
            background-color:#000!important;
            border-radius:12px
          }
          .tab-pane.show.active{
            display:block
          }
          .live-diamond-modal__body .nav-item{
            margin-right:4px;
            margin-bottom:4px
          }
          @media (max-width:1024px){
            .bs-canvas{
              width:100%
            }
            .boundary{
              position:fixed;
              top:100px;
              right:2px;
              width:17px;
              height:71vh;
              z-index:2
            }
            .bluebox{
              right:-61px
            }
            .margintest{
              margin-left:-25px
            }
            .noMargin{
              margin-left:-15px
            }
            .marginImg{
              margin-left:-25px
            }
            .noMarginImg{
              margin-left:-28px
            }
            #streamingmodalDiamond .modal-content{
              margin-bottom:76px
            }
          }
          @media (max-width:1200px){
            #streamingmodalDiamond .live-diamond-modal__body li.nav-item{
              display:flex!important;
              width:auto!important;
              font-size:1.1em;
              border-right:none!important
            }
          }
          .live-diamond-modal__content .modal-body{
            overflow-y:scroll
          }
          .live-diamond-modal__tabs{
            display:flex;
            max-width:730px;
            -moz-column-gap:8px;
            column-gap:8px;
            overflow:scroll;
            padding:0 0 8px;
            list-style:none
          }
          @media (min-width:1021px){
            .live-diamond-modal__tabs{
              display:flex;
              flex-wrap:wrap;
              max-width:736px;
              margin-left:auto;
              margin-right:auto;
              overflow:unset;
              row-gap:8px
            }
          }
          .live-diamond-modal__modal{
            padding-right:0!important
          }
          .live-diamond-modal__wrapper{
            max-width:830px
          }
          .live-diamond-modal__content{
            height:80vh;
            padding-bottom:10px
          }
          .live-diamond-modal__body{
            padding:0!important;
            max-width:768px;
            margin-left:auto;
            margin-right:auto;
            overflow-y:auto;
            height:100%;
            position:relative;
            color:#fff
          }
          .live-diamond-modal__iframe{
            background:rgba(255,255,255,.1);
            padding:16px 8px;
            border-radius:12px;
            margin-bottom:16px
          }
          .live-diamond-modal__iframe iframe{
            border:none;
            border-radius:12px
          }
          .live-diamond-modal__iframe-now{
            padding:16px 8px;
            display:flex;
            align-items:center;
            justify-content:space-between;
            background:rgba(0,0,0,.2);
            border-radius:12px;
            margin-bottom:8px
          }
          .live-diamond-modal__iframe-now p{
            margin-bottom:0
          }
          .live-diamond-modal__filters{
            display:inline-flex;
            align-items:center;
            justify-content:space-between;
            -moz-column-gap:8px;
            column-gap:8px;
            margin:32px 0
          }
          .live-diamond-modal__filters--order button{
            background:rgba(255,255,255,.1);
            border-radius:20px;
            color:#eaeaea;
            padding:2px 8px;
            width:70px;
            border:2px solid #fff;
            display:flex;
            align-items:center;
            justify-content:space-between
          }
          .live-diamond-modal__filters--order button img{
            width:20px
          }
          .live-diamond-modal__filters--order button:focus{
            border:1px solid #fff!important
          }
          .live-diamond-modal__filters--search{
            width:98%;
            display:flex;
            flex-direction:row;
            align-items:center;
            position:absolute
          }
          .live-diamond-modal__filters--search-magnifying{
            position:relative
          }
          .live-diamond-modal__filters--search-magnifying i{
            position:absolute;
            right:15px;
            bottom:-7px
          }
          .live-diamond-modal__filters--search input{
            border:1px solid #afafaf5c;
            color:#eaeaea;
            background:rgba(255,255,255,.1);
            border-radius:12px;
            width:98.5%;
            padding:8px
          }
          @media (min-width:1021px){
            .live-diamond-modal__filters--search input{
              width:100%
            }
          }
          .live-diamond-modal__filters--search input::-webkit-input-placeholder{
            color:#eaeaea
          }
          .live-diamond-modal__filters--search input::-moz-placeholder{
            color:#eaeaea
          }
          .live-diamond-modal__filters--search input:-ms-input-placeholder{
            color:#eaeaea
          }
          .live-diamond-modal__filters--search input::-ms-input-placeholder{
            color:#eaeaea
          }
          .live-diamond-modal__filters--search input::placeholder{
            color:#eaeaea
          }
          .live-diamond-modal__tab{
            width:84px;
            height:80px;
            justify-content:center;
            align-items:center;
            position:relative;
            border-radius:12px;
            background:rgba(255,255,255,.1);
            text-align:center;
            line-height:14px;
            font-size:.7rem;
            padding:0;
            display:flex;
            flex-direction:column
          }
          .live-diamond-modal__tab--icon{
            width:32px;
            margin-bottom:4px
          }
          .live-diamond-modal__icon{
            font-size:23.5px;
            margin-bottom:12px
          }
          .live-diamond-modal__count{
            background:rgba(255,255,255,.1);
            position:absolute;
            top:0;
            right:0;
            border-radius:50%;
            width:20px;
            height:20px;
            display:flex;
            align-items:center;
            justify-content:center;
            font-size:.8rem
          }
          .live-diamond-modal__display{
            color:#fff;
            display:flex;
            width:100%;
            align-items:center;
            padding:10px;
            border-radius:30px;
            height:44px;
            font-size:12px;
            font-weight:600
          }
          .live-diamond-modal__display:first-child{
            text-align:end
          }
          .live-diamond-modal__display--block{
            display:inline-flex;
            width:100%;
            gap:2px;
            margin:1rem 0
          }
          .live-diamond-modal__display--wrapper{
            display:flex;
            flex-direction:column;
            border-radius:20px;
            width:100%;
            gap:2px;
            margin-top:2px;
            margin-bottom:8px
          }
          @media (min-width:720px){
            .live-diamond-modal__display{
              padding:12px 20px
            }
            .live-diamond-modal__display--wrapper{
              display:flex;
              height:auto;
              flex-direction:row
            }
          }
          .live-diamond-modal__display--wrapper:hover .live-diamond-modal__display--item{
            background:#fff
          }
          .live-diamond-modal__display--wrapper.selected .live-diamond-modal__display--item{
            background:#fff;
            color:#000
          }
          .live-diamond-modal__display--wrapper.selected .live-diamond-modal__display--item p, 
          .live-diamond-modal__display--wrapper:hover .live-diamond-modal__display--item p{
            color:#000!important
          }
          .live-diamond-modal__display p{
            margin-bottom:0;
            width:100%
          }
          .live-diamond-modal__display--item{
            background:rgba(255,255,255,.1);
            padding:12px 20px;
            border-radius:20px;
            width:100%;
            cursor:pointer;
            display:flex;
            align-items:center
          }
          .live-diamond-modal__display--item:first-child{
            justify-content:center;
            border-radius:20px 20px 0 0;
            text-align:center
          }
          @media (min-width:720px){
            .live-diamond-modal__display--item:first-child{
              border-radius:20px 0 0 20px;
              justify-content:end
            }
          }
          .live-diamond-modal__display--item:nth-child(2){
            border-radius:0 0 20px 20px;
            justify-content:center;
            text-align:center;
            background:rgba(255,255,255,.2)
          }
          @media (min-width:720px){
            .live-diamond-modal__display--item:nth-child(2){
              border-radius:0 20px 20px 0;
              justify-content:start;
              background:rgba(255,255,255,.1);
              text-align:left
            }
          }
          .live-diamond-modal__display--item p{
            margin-bottom:0;
            font-size:14px
          }
          .live-diamond-themes{
            margin-top:30px;
            display:inline-flex;
            padding-bottom:50px
          }
          .live-diamond-themes .select-color{
            margin:2px;
            width:40px;
            height:40px;
            border-radius:500px;
            border:none
          }
          .live-diamond-themes .black{
            background-color:#0f0f0f
          }
          .live-diamond-themes .blue{
            background-color:#1e5dd8
          }
          .live-diamond-themes .green{
            background-color:#42914f
          }
          .live-diamond-themes .orange{
            background-color:#c4a700
          }
          .live-diamond-themes .red{
            background-color:#b31c1c
          }
          @supports (scrollbar-color:auto){
            .live-diamond-modal__body{
              scrollbar-color:#fff rgba(255,255,255,.1)
            }
          }
          .live__diamond--loading-overlay{
            position:absolute;
            top:0;
            left:0;
            width:100%;
            height:100%;
            background:rgba(0,0,0,.5);
            display:flex;
            justify-content:center;
            align-items:center;
            z-index:1000
          }
          .spinner{
            border:4px solid rgba(255,255,255,.3);
            border-radius:50%;
            border-top:4px solid #fff;
            width:50px;
            height:50px;
            -webkit-animation:1s linear infinite spin;
            animation:1s linear infinite spin
          }
          @-webkit-keyframes spin{
            0%{transform:rotate(0)}
            100%{transform:rotate(360deg)}
          }
          @keyframes spin{
            0%{transform:rotate(0)}
            100%{transform:rotate(360deg)}
          }
          #ModalPromoContest{
            z-index:9999;
            background:rgba(0,0,0,.6)
          }
          #ModalPromoContest .modal-content{
            top:unset
          }
          #ModalPromoContest .modal-dialog{
            height:90vh;
            max-width:1280px
          }
          #ModalPromoContest .modal-header{
            border-bottom:0;
            background-color:#0d1321
          }
          #ModalPromoContest .modal-header .close{
            color:#fff
          }
          #ModalPromoContest iframe{
            height:80vh;
            background-color:#353434
          }
        `}</style>
      </section>
    </div>
  )
}
