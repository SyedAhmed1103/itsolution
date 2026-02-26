(function($) {
    "use strict";
  
    const $documentOn = $(document);
    const $windowOn = $(window);
  
    $documentOn.ready( function() {
  
      /* ================================
       Mobile Menu Js Start
    ================================ */
    
      $('#mobile-menu').meanmenu({
        meanMenuContainer: '.mobile-menu',
        meanScreenWidth: "1099",
        meanExpand: ['<i class="far fa-plus"></i>'],
    });

       $('#mobile-menus').meanmenu({
        meanMenuContainer: '.mobile-menus',
        meanScreenWidth: "1920",
        meanExpand: ['<i class="far fa-plus"></i>'],
    });

     $documentOn.on("click", ".mean-expand", function () {
        let icon = $(this).find("i");

        if (icon.hasClass("fa-plus")) {
            icon.removeClass("fa-plus").addClass("fa-minus"); 
        } else {
            icon.removeClass("fa-minus").addClass("fa-plus"); 
        }
    });

    /* ================================
        Sidebar Toggle & Sticky Item Logic
        ================================ */

        // Open offcanvas
        $(".sidebar__toggle").on("click", function () {
        $(".offcanvas__info").addClass("info-open");
        $(".offcanvas__overlay").addClass("overlay-open");

        // Hide sticky item
        $(".sidebar-sticky-item").fadeOut().removeClass("active");
        });

        // Close offcanvas
        $(".offcanvas__close, .offcanvas__overlay").on("click", function () {
        $(".offcanvas__info").removeClass("info-open");
        $(".offcanvas__overlay").removeClass("overlay-open");

        // Show sticky item
        $(".sidebar-sticky-item").fadeIn().addClass("active");
        });

        /* ================================
        Body Overlay Js Start
        ================================ */

        $(".body-overlay").on("click", function () {
        $(".offcanvas__area").removeClass("offcanvas-opened");
        $(".df-search-area").removeClass("opened");
        $(".body-overlay").removeClass("opened");

        // Show sticky item when overlay clicked
        $(".sidebar-sticky-item").fadeIn().addClass("active");
        });

        /* ================================
        Offcanvas Link Click (Optional)
        ================================ */

        $(".offcanvas a").on("click", function () {
        $(".sidebar-sticky-item").fadeIn().addClass("active");
    });

    
      /* ================================
       Sticky Header Js Start
    ================================ */

       $windowOn.on("scroll", function () {
        if ($(this).scrollTop() > 250) {
          $("#header-sticky").addClass("sticky");
        } else {
          $("#header-sticky").removeClass("sticky");
        }
      });      


      ////////////////////////////////////////////////////
	// 05. Search Js
	$(".search_btn").on("click", function () {
		$(".search_popup").addClass("search-opened");
		$(".search-popup-overlay").addClass("search-popup-overlay-open");
		$("body").addClass("overflow-hidden");
	});

	$(".search_close_btn").on("click", function () {
		$(".search_popup").removeClass("search-opened");
		$(".search-popup-overlay").removeClass("search-popup-overlay-open");
		$("body").removeClass("overflow-hidden");
	});
	$(".search-popup-overlay").on("click", function () {
		$(".search_popup").removeClass("search-opened");
		$(this).removeClass("search-popup-overlay-open");
		$("body").removeClass("overflow-hidden");
	});

      
       /* ================================
       Video & Image Popup Js Start
    ================================ */

      $(".img-popup").magnificPopup({
        type: "image",
        gallery: {
          enabled: true,
        },
      });

      $(".video-popup").magnificPopup({
        type: "iframe",
        callbacks: {},
      });
  
      /* ================================
       Counterup Js Start
    ================================ */

      $(".count").counterUp({
        delay: 15,
        time: 4000,
      });
  
      /* ================================
       Wow Animation Js Start
    ================================ */

      new WOW().init();
  
      /* ================================
       Nice Select Js Start
    ================================ */

    if ($('.single-select').length) {
        $('.single-select').niceSelect();
    }

      /* ================================
       Parallaxie Js Start
    ================================ */

      if ($('.parallaxie').length && $(window).width() > 991) {
          if ($(window).width() > 768) {
              $('.parallaxie').parallaxie({
                  speed: 0.55,
                  offset: 0,
              });
          }
      }

      /* ================================
      Hover Active Js Start
    ================================ */

     $(".service-card-items-3").hover(
        function () {
            $(".service-card-items-3").removeClass("active");
            $(this).addClass("active");
        }
    );

    

    /* ================================
     Scrolldown Js Start
    ================================ */
    $("#scrollDown").on("click", function () {
        setTimeout(function () {
            $("html, body").animate({ scrollTop: "+=1000px" }, "slow");
        }, 1000);
    });



    /* ================================
      Brand Slider Js Start
    ================================ */

   if ($('.brand-slider').length > 0) {
    const brandSlider = new Swiper(".brand-slider", {
        spaceBetween: 30,
        speed: 1300,
        loop: true,
        autoplay: {
            delay: 2000,
            disableOnInteraction: false,
        },
        navigation: {
            nextEl: ".array-next",
            prevEl: ".array-prev",
        },
        breakpoints: {
            1399: {
                slidesPerView: 8,
            },
            1199: {
                slidesPerView: 5.5,
            },
            991: {
                slidesPerView: 4.5,
            },
            767: {
                slidesPerView: 3.3,
            },
            575: {
                slidesPerView: 2,
            },
            0: {
                slidesPerView: 2.3,
            },
        },
    });
   }

    if ($(".hero-brand6").length > 0) {
        const heroBrand6 = new Swiper(".hero-brand6", {
            spaceBetween: 30,
            speed: 2000,
            loop: true,
            autoplay: {
                delay: 1000,
                disableOnInteraction: false,
            },
            breakpoints: {
                1199: {
                    slidesPerView: 4,
                },
                991: {
                    slidesPerView: 3,
                },
                767: {
                    slidesPerView: 4,
                },
                575: {
                    slidesPerView: 3,
                },
                0: {
                    slidesPerView: 2,
                },
            },
        });
    }

    if ($(".service-slider-6").length > 0) {
			const serviceSlider6 = new Swiper(".service-slider-6", {
				spaceBetween: 30,
				speed: 2000,
				loop: true,
				autoplay: {
					delay: 1000,
					disableOnInteraction: false,
				},
				breakpoints: {
					1399: {
						slidesPerView: 5,
					},
					1199: {
						slidesPerView: 4,
					},
					991: {
						slidesPerView: 3,
					},
					767: {
						slidesPerView: 2,
					},
					575: {
						slidesPerView: 1.7,
					},
					400: {
						slidesPerView: 1,
					},
				},
			});
		}

        if ($(".testimonial-slider-6").length > 0) {
			const testimonialSlider6 = new Swiper(".testimonial-slider-6", {
				spaceBetween: 30,
				speed: 2000,
				loop: true,
				autoplay: {
					delay: 1000,
					disableOnInteraction: false,
				},
				breakpoints: {
					1399: {
						slidesPerView: 4,
					},
					1199: {
						slidesPerView: 4,
					},
					991: {
						slidesPerView: 3,
					},
					767: {
						slidesPerView: 2,
					},
					575: {
						slidesPerView: 1.8,
					},
					400: {
						slidesPerView: 1,
					},
				},
			});
		}

   /* ================================
      Showcase Slider Js Start
    ================================ */

   if ($('.showcase-slider').length > 0) {
    const ShowcaseSlider = new Swiper(".showcase-slider", {
        spaceBetween: 30,
        speed: 1300,
        loop: true,
        autoplay: {
            delay: 2000,
            disableOnInteraction: false,
        },
        navigation: {
            prevEl: ".array-next",
            nextEl: ".array-prev",
        },
        breakpoints: {
            1399: {
                slidesPerView: 3,
            },
            1199: {
                slidesPerView: 2,
            },
            991: {
                slidesPerView: 2,
            },
            767: {
                slidesPerView: 1,
            },
            575: {
                slidesPerView: 1,
            },
            0: {
                slidesPerView: 1,
            },
        },
    });
   }

   /* ================================
      Testimonial Slider Js Start
    ================================ */

   if ($('.testimonial-slider').length > 0) {
    const TestimonialSlider = new Swiper(".testimonial-slider", {
        spaceBetween: 30,
        speed: 1300,
        loop: true,
        autoplay: {
            delay: 2000,
            disableOnInteraction: false,
        },
         pagination: {
            el: ".dot",
            clickable: true,
        },
        breakpoints: {
            1399: {
                slidesPerView: 1,
            },
            1199: {
                slidesPerView: 1,
            },
            991: {
                slidesPerView: 1,
            },
            767: {
                slidesPerView: 1,
            },
            575: {
                slidesPerView: 1,
            },
            0: {
                slidesPerView: 1,
            },
        },
    });
   }

   /* ================================
       News Slider Js Start
    ================================ */

   if ($('.news-slider').length > 0) {
    const NewsSlider = new Swiper(".news-slider", {
        spaceBetween: 30,
        speed: 1300,
        loop: true,
        autoplay: {
            delay: 2000,
            disableOnInteraction: false,
        },
         navigation: {
            prevEl: ".array-next",
            nextEl: ".array-prev",
        },
        breakpoints: {
            1399: {
                slidesPerView: 3,
            },
            1199: {
                slidesPerView: 3,
            },
            991: {
                slidesPerView: 3,
            },
            767: {
                slidesPerView: 2,
            },
            575: {
                slidesPerView: 1,
            },
            0: {
                slidesPerView: 1,
            },
        },
    });
   }

   /* ================================
       Process Slider Js Start
    ================================ */

   if ($('.process-slider').length > 0) {
    const ProcessSlider = new Swiper(".process-slider", {
        spaceBetween: 30,
        speed: 1300,
        loop: true,
        centeredSlides: true,
        autoplay: {
            delay: 2000,
            disableOnInteraction: false,
        },
         pagination: {
            el: ".dot2",
            clickable: true,
        },
        breakpoints: {
            1399: {
                slidesPerView: 3,
            },
            1199: {
                slidesPerView: 3,
            },
            991: {
                slidesPerView: 3,
            },
            767: {
                slidesPerView: 2,
            },
            575: {
                slidesPerView: 1,
            },
            0: {
                slidesPerView: 1,
            },
        },
    });
   }

//    $(document).ready(function () {

//     var $servicecarditems3 = $('.service-card-items-3');

//     if ($servicecarditems3.length) {
//         $servicecarditems3.on({
//             mouseenter: function () {
//                 if (!$(this).hasClass('active')) {
//                     $servicecarditems3.removeClass('active');
//                     $(this).addClass('active');
//                 }
//             }
//         });
//     }

// });

//>> Hero-Image Slider Start <<//
       if($('.image-slider').length > 0) {
            const ImageSlider = new Swiper(".image-slider", {
                spaceBetween: 30,
                speed: 2000,
                loop: true,
                 pagination: {
                    el: ".dot1",
                    clickable: true,
                },
                    autoplay: {
                    delay: 1,
                    disableOnInteraction: true,
                },
            });
        }

   	/* ================================
     Service Box Js Start
    ================================ */

    const serviceItems = document.querySelectorAll(".service-card-items-1");

    serviceItems.forEach((box) => {
    const hoverImg = box.querySelector(".hover-image");
    if (!hoverImg) return;

    box.addEventListener("mousemove", (e) => {
        const rect = box.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        hoverImg.style.opacity = "1";
        hoverImg.style.visibility = "visible";
        hoverImg.style.transform = `translate(${x}px, ${y}px) rotate(6.25deg)`;
    });

    box.addEventListener("mouseleave", () => {
        hoverImg.style.opacity = "0";
        hoverImg.style.visibility = "hidden";
    });
    });

     	/* ================================
     Service Box Js Start
    ================================ */

    const serviceItems2 = document.querySelectorAll(".service-card-items-inner");

    serviceItems2.forEach((box) => {
    const hoverImg = box.querySelector(".hover-image");
    if (!hoverImg) return;

    box.addEventListener("mousemove", (e) => {
        const rect = box.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        hoverImg.style.opacity = "1";
        hoverImg.style.visibility = "visible";
        hoverImg.style.transform = `translate(${x}px, ${y}px) rotate(6.25deg)`;
    });

    box.addEventListener("mouseleave", () => {
        hoverImg.style.opacity = "0";
        hoverImg.style.visibility = "hidden";
    });
    });

    /* ================================
      Custom Accordion Js Start
    ================================ */

   if ($('.accordion-box').length) {
        $(".accordion-box").on('click', '.acc-btn', function () {
            var outerBox = $(this).closest('.accordion-box');
            var target = $(this).closest('.accordion');
            var accBtn = $(this);
            var accContent = accBtn.next('.acc-content');

            if (target.hasClass('active-block')) {
                // Already open, so close it
                accBtn.removeClass('active');
                target.removeClass('active-block');
                accContent.slideUp(300);
            } else {
                // Close all others
                outerBox.find('.accordion').removeClass('active-block');
                outerBox.find('.acc-btn').removeClass('active');
                outerBox.find('.acc-content').slideUp(300);

                // Open clicked one
                accBtn.addClass('active');
                target.addClass('active-block');
                accContent.slideDown(300);
            }
        });
    }

    /* ================================
        Mouse Cursor Animation Js Start
    ================================ */

    if ($(".mouseCursor").length > 0) {
        function itCursor() {
            var myCursor = jQuery(".mouseCursor");
            if (myCursor.length) {
                if ($("body")) {
                    const e = document.querySelector(".cursor-inner"),
                        t = document.querySelector(".cursor-outer");
                    let n, i = 0, o = !1;
                    window.onmousemove = function(s) {
                        if (!o) {
                            t.style.transform = "translate(" + s.clientX + "px, " + s.clientY + "px)";
                        }
                        e.style.transform = "translate(" + s.clientX + "px, " + s.clientY + "px)";
                        n = s.clientY;
                        i = s.clientX;
                    };
                    $("body").on("mouseenter", "button, a, .cursor-pointer", function() {
                        e.classList.add("cursor-hover");
                        t.classList.add("cursor-hover");
                    });
                    $("body").on("mouseleave", "button, a, .cursor-pointer", function() {
                        if (!($(this).is("a", "button") && $(this).closest(".cursor-pointer").length)) {
                            e.classList.remove("cursor-hover");
                            t.classList.remove("cursor-hover");
                        }
                    });
                    e.style.visibility = "visible";
                    t.style.visibility = "visible";
                }
            }
        }
        itCursor();
    }

    /* ================================
        Back To Top Button Js Start
    ================================ */
    $windowOn.on('scroll', function() {
        var windowScrollTop = $(this).scrollTop();
        var windowHeight = $(window).height();
        var documentHeight = $(document).height();

        if (windowScrollTop + windowHeight >= documentHeight - 10) {
            $("#back-top").addClass("show");
        } else {
            $("#back-top").removeClass("show");
        }
    });

    $documentOn.on('click', '#back-top', function() {
        $('html, body').animate({ scrollTop: 0 }, 800);
        return false;
    });

    /* ================================
       Search Popup Toggle Js Start
    ================================ */

    // if ($(".search-toggler").length) {
    //     $(".search-toggler").on("click", function(e) {
    //         e.preventDefault();
    //         $(".search-popup").toggleClass("active");
    //         $("body").toggleClass("locked");
    //     });
    // }
	
    /* ================================
       Smooth Scroller And Title Animation Js Start
    ================================ */
    if ($('#smooth-wrapper').length && $('#smooth-content').length) {
        gsap.registerPlugin(ScrollTrigger, ScrollSmoother, SplitText);

        gsap.config({
            nullTargetWarn: false,
        });

        let smoother = ScrollSmoother.create({
            wrapper: "#smooth-wrapper",
            content: "#smooth-content",
            smooth: 2,
            effects: true,
            smoothTouch: 0.1,
            normalizeScroll: false,
            ignoreMobileResize: true,
        });
    }

   /* ==================================================
     Text Anim  Image 
    ================================================== */
    const textAnims = document.querySelectorAll('.text-anims');

    const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if(entry.isIntersecting){
        entry.target.classList.add('show');
        observer.unobserve(entry.target); // একবার হলে আর observe করবে না
        }
    });
    }, { threshold: 0.5 }); // 50% দেখা গেলে trigger

    textAnims.forEach(el => observer.observe(el));

  /* ==================================================
    Image Scale
    ================================================== */
   var width = $(window).width();

    if (width > 1023) {
        if (document.querySelectorAll(".scale-animation").length > 0) {

            gsap.registerPlugin(ScrollTrigger);

            gsap.utils.toArray(".scale-animation").forEach(function (section) {

                gsap.timeline({
                    scrollTrigger: {
                        trigger: section,
                        scrub: 3,
                        start: "top 90%",
                        end: "bottom 70%",
                    },
                })
                .from(section, {
                    scale: 0.8,
                    opacity: 0,
                    transformOrigin: "center bottom",
                    duration: 1.5,
                    ease: "power2.out",
                })
                .to(section, {
                    scale: 1,
                    opacity: 1,
                    transformOrigin: "center bottom",
                    duration: 1.2,
                    ease: "power2.out",
                });
            });
        }
    }

  if ($('.full-img-wrap3').length > 0) {
        // Check window width
        if (window.innerWidth > 1399) {
            ScrollTrigger.create({
                trigger: ".full-img-wrap3",
                start: "top 0",
                end: "bottom 0%",
                pin: ".full-img3",
                pinSpacing: false,
            });
        }
    }


    // ScrollTrigger register করতে ভুলবেন না
    gsap.registerPlugin(ScrollTrigger);

    gsap.utils.toArray(".tp_fade_anim").forEach((item) => {
        let tp_fade_offset = item.getAttribute("data-fade-offset") || 40,
            tp_duration_value = item.getAttribute("data-duration") || 0.75,
            tp_fade_direction = item.getAttribute("data-fade-from") || "bottom",
            tp_onscroll_value = item.getAttribute("data-on-scroll") || 1,
            tp_delay_value = item.getAttribute("data-delay") || 0.15,
            tp_ease_value = item.getAttribute("data-ease") || "power2.out";

        let tp_anim_setting = {
            opacity: 0,
            ease: tp_ease_value,
            duration: tp_duration_value,
            delay: tp_delay_value,
            x: (tp_fade_direction == "left" ? -tp_fade_offset : (tp_fade_direction == "right" ? tp_fade_offset : 0)),
            y: (tp_fade_direction == "top" ? -tp_fade_offset : (tp_fade_direction == "bottom" ? tp_fade_offset : 0)),
        };

        // Scroll এ animate হবে
        if (tp_onscroll_value == 1) {
            tp_anim_setting.scrollTrigger = {
                trigger: item,
                start: "top 85%",
                toggleActions: "play none none reset",
            };
        }

        gsap.from(item, tp_anim_setting);
    });

   
      // rr_title_anim 
    if (document.querySelectorAll(".animation").length > 0) {
    let animations = document.querySelectorAll(".animation");

    animations.forEach((animation) => {
        const title = animation.querySelector(".gt_title_animation");
        const sup = animation.querySelector(".sup_animation");

        if (!title) return;

        const split = new SplitText(title, { type: "chars, words" });

        let tl = gsap.timeline({ paused: true });

        if (sup) {
        tl.to(sup, { opacity: 1, x: -50, ease: "back" });
        }

        tl.from(split.chars, {
        opacity: 0,
        y: 50,
        rotation: 1,
        duration: 2,
        ease: "back",
        stagger: 0.05,
        });

        ScrollTrigger.create({
        trigger: animation,
        start: "top bottom",
        toggleActions: "play none none reverse",
        onEnter: () => tl.timeScale(2.3).play(),
        onLeaveBack: () => tl.timeScale(2.3).reverse(),
        });
    });
    }


  // rr-char-animation
  if (
    document.querySelectorAll(".gt-char-animation").length > 0 &&
    window.innerWidth > 768
  ) {
    let char_come = gsap.utils.toArray(".gt-char-animation");
    char_come.forEach((splitTextLine) => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: splitTextLine,
          start: "top 90%",
          end: "bottom 5%",
          scrub: false,
          markers: false,
          toggleActions: "play none none reverse",
        },
      });

      const itemSplitted = new SplitText(splitTextLine, {
        type: "chars, words",
      });
      gsap.set(splitTextLine, { perspective: 300 });

      itemSplitted.split({ type: "chars, words" });

      tl.from(itemSplitted.chars, {
        duration: 0.4,
        delay: 0.1,
        x: 100,
        autoAlpha: 0,
        stagger: 0.05,
      });
    });
  }

        // GSAP title animation
    if (document.querySelectorAll(".gt_title_anim").length > 0) {
        if ($('.gt_title_anim').length > 0) {
        let splitTitleLines = gsap.utils.toArray(".gt_title_anim");
        splitTitleLines.forEach(splitTextLine => {
            const tl = gsap.timeline({
            scrollTrigger: {
                trigger: splitTextLine,
                start: 'top 90%',
                end: 'bottom 60%',
                scrub: false,
                markers: false,
                toggleActions: 'play none none reverse'
            }
            });

            const itemSplitted = new SplitText(splitTextLine, { type: "words, lines" });
            gsap.set(splitTextLine, { perspective: 400 });
            itemSplitted.split({ type: "lines" })
            tl.from(itemSplitted.lines, {
            duration: 1,
            delay: 0.3,
            opacity: 0,
            rotationX: -80,
            force3D: true,
            transformOrigin: "top center -50",
            stagger: 0.1
            });
        });
        }
    }


        // Project-card-wrapper-4 animation 
        gsap.utils.toArray(".project-card-wrapper-4 .project-card-items-4").forEach((element, index, array) => {
        if (index === array.length - 1) return;

            const delay = parseFloat(element.getAttribute("data-ani-delay")) || 0;
            gsap.to(element, {
                scale: .6,
                opacity: 0,
                duration: 2,
                delay: delay,
                scrollTrigger: {
                    trigger: element,
                    start: "top 15%",
                    end: "bottom 15%",
                    scrub: 2,
                    pin: true,
                    pinSpacing: false,
                    markers: false
                }
            });
        });


        if (window.innerWidth > 1200) {
            const items = document.querySelectorAll(".process-wrapper .process-card-item");
            if (items.length < 5) return; // skip if items are missing
            const about = gsap.timeline({
            scrollTrigger: {
                trigger: ".process-wrapper",
                start: "top 60%",
                toggleActions: "play none none reverse",
                markers: false,
            },
            defaults: {
                ease: "ease1",
                duration: 1,
            },
            });
            about
            .from(items[0], {
                xPercent: 100,
                rotate: -8
            })
            .from(items[1], {
                xPercent: 30,
                rotate: 4.13
            }, "<")
            .from(items[2], {
                xPercent: -30,
                rotate: -6.42
            }, "<")
            .from(items[3], {
                xPercent: -60,
                rotate: -12.15
            }, "<")
            .from(items[4], {
                xPercent: -120,
                rotate: 12.15
            }, "<");
        }

        
    if (window.innerWidth > 1200) {
        const items = document.querySelectorAll(".team-wrapper .team-card-items");
        if (items.length < 4) return; // skip if items are missing
        const about = gsap.timeline({
        scrollTrigger: {
            trigger: ".team-wrapper",
            start: "top 60%",
            toggleActions: "play none none reverse",
            markers: false,
        },
        defaults: {
            ease: "ease1",
            duration: 1,
        },
        });
        about
        .from(items[0], {
            xPercent: 100,
            rotate: -8
        })
        .from(items[1], {
            xPercent: 30,
            rotate: 4.13
        }, "<")
        .from(items[2], {
            xPercent: -30,
            rotate: -6.42
        }, "<")
        .from(items[3], {
            xPercent: -60,
            rotate: -12.15
        }, "<")
        .from(items[4], {
            xPercent: -120,
            rotate: 12.15
        }, "<");
    }

    
	
   
   
    
    }); // End Document Ready Function


   document.addEventListener("DOMContentLoaded", function () {

  const circle = document.querySelector(".progress");
  const count = document.getElementById("count");

  if (!circle || !count) return;

  const target = 80;
  const duration = 1500;
  const radius = 70;
  const circumference = 2 * Math.PI * radius;

  circle.style.strokeDasharray = circumference;
  circle.style.strokeDashoffset = circumference;

  let start = null;

  function animate(time) {
    if (!start) start = time;
    const progress = Math.min((time - start) / duration, 1);

    const value = Math.floor(progress * target);
    count.textContent = `+${value}`;

    circle.style.strokeDashoffset =
      circumference - (progress * target / 100) * circumference;

    if (progress < 1) {
      requestAnimationFrame(animate);
    }
  }

  requestAnimationFrame(animate);

    });

     // approach-area
    if (document.querySelectorAll(".approach-area").length > 0) {

        const boxes = document.querySelectorAll(".approach-area .approach-box");

        gsap.from(boxes, {
        x: "100%",
        duration: 1,
        stagger: 0.3,
        ease: "power2.out",
        scrollTrigger: {
            scrub: 2,
            trigger: ".approach-wrapper-box",
            start: "top 100%",
            end: "bottom 40%",
            toggleActions: "play none none reverse",
        }
        });
    }
   
	//split-title element
    document.querySelectorAll(".tp-split-title").forEach(title => {
            const split = new SplitText(title, { type: "chars" });

            split.chars.forEach(char => char.classList.add("char"));

            gsap.to(split.chars, {
                scrollTrigger: {
                trigger: title,
                start: "top 80%",
                },
                duration: .8,
                clipPath: "inset(0% 0% 0% 0%)",
                x: 0,
                opacity: 1,
                ease: "power4.out",
                stagger: 0.03
            });
        });

     /* ================================
       Preloader Js Start
    ================================ */

     function loader() {
        $(window).on('load', function() {
            // Animate loader off screen
            $(".preloader").addClass('loaded');                    
            $(".preloader").delay(600).fadeOut();                       
        });
    }
    loader();

    
  })(jQuery); // End jQuery

