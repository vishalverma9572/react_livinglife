import React from 'react'
import './content.css'
import banner_img from './image/banner.jpg'
import dish_img from "./image/dish-g230317b8a_1920.png"
import chairs_img from "./image/chairs-g39469e673_1920.jpg"
import ansle_img from "./image/pexels-ansel-lee-3192175.jpg"
import man_img from "./image/man.jpg"

export default function Content() {
  return (
    <div className="container">
        <main>
            <article className="article-featured">
                <h2 className="article-title">Finding simplicity in life</h2>
                <img src={banner_img} alt="" className="article-image"/>
                <p className="article-info">July 23, 2019 | 3 comments</p>
                <p className="article-body"><strong>Life can get complicated really quickly</strong>, but it doesn't have to be! There are
                    many ways to simplify your life, a few of which we've explored in the past. This week we're taking a
                    bit of a approach though, in how you can find simplicity in the life you already living.</p>
                <a href="#">read more...</a>
            </article>
            
            <article className="article-recent">
                
                <div className="artice-recent-secondary">
                    <h2 className="article-title"> Keeping cooking simple</h2>

                    <p className="article-body">Food is a very important part of everyone's life. If you want to be healthy,
                        you have to eat healthy. One of the easiest ways to do that is to keep your cooking nice and
                        simple.
                    </p>
                    <a href="#">read more...</a>
                </div>
                <div className="article-recent-main"><img src={dish_img} alt="" className="article-image"/>
                    <p className="article-info">July 19, 2019 | 3 comments</p>
                </div>

            </article>
            <article className="article-recent">
                
                <div className="artice-recent-secondary">
                    <h2 className="article-title">Simplicity and work</h2>

                    <p className="article-body">Work is often a major source of stress. People get frustrated, it ruins
                        their relationship with others and it leads to burnout. By keeping your work life as simple as
                        possible, it will help balance everything out. </p>
                    <a href="#">read more...</a>
                </div>
                <div className="article-recent-main"><img src={chairs_img} alt="" className="article-image"/>
                    <p className="article-info">July 12, 2019 | 3 comments</p>
                </div>

            </article>
            <article className="article-recent">
                
                <div className="artice-recent-secondary">
                    <h2 className="article-title">Simple decorations</h2>

                    <p className="article-body">A home isn't a home until you've decorated a little. People either don't
                        decorate, or they go overboard and it doesn't have the impact they were hoping for. Staying
                        simple will help draw the eye where you want it to and make things pop like never before</p>
                    <a href="#">read more...</a>
                </div>
                <div className="article-recent-main"><img src={ansle_img} alt="" className="article-image"/>
                    <p className="article-info">July 3, 2019 | 3 comments</p>
                </div>

            </article>
        </main>
        <aside className="sidebar">
            <div className="sidebar-widget  sidebar-widget1">
                <h2 className="widget-title"><a href="/about-me.html">About me</a></h2>
                <img src={man_img} alt="" className="widget-recent-post-image"/>
                <p className="widget-body">I find life better, and I'm happier, when things are nice and simple.</p>
            </div>
            <div className="sidebar-widget">
                <h2 className="widget-title"><a href="/recent-post.html">Recent posts</a> </h2>
                <div className="widget-recent-post">
                    <h3 className="widget-recent-post-title">Keeping cooking simple</h3>
                    <img src={dish_img} alt="" className="widget-recent-post-image"/>

                </div>
                <div className="widget-recent-post">
                    <h3 className="widget-recent-post-title">Simplicity and work</h3>
                    <img src={chairs_img} alt="" className="widget-recent-post-image"/>

                </div>
                <div className="widget-recent-post">
                    <h3 className="widget-recent-post-title">Simple decorations</h3>
                    <img src={ansle_img} alt="" className="widget-recent-post-image"/>

                </div>

            </div>
        </aside>
        
    </div>
  )
}
// btnham=document.getElementById("hamburger");.`
// btnham.addEventListener("click",function(){
//     document.getElementById("navul").classNameList.toggle("cmpheigh")
//     // if(document.getElementById("navul").style.height!="0"){
//     //     btnham.innerHTML='<i className="fa-solid fa-2x fa-xmark"></i>'
        
//     // }
    
// })

