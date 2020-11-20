<template>
    <div class="home-box">
        <Header></Header>
        <div class="content">
            <div class="article-list">
                <article>
                    <header>
                        <img src="http://demo2.cssmoban.com/cssthemes6/juli-master/images/blog-1-1000x600.jpg" class="poster-image" alt="">
                        <div class="operation-button-box">
                            <div class="left">tags</div>
                            <div class="right">
                                <div class="operation-button-item">
                                    <span class="operation-button-icon"></span>
                                    <span class="button-label">分享</span>
                                </div>
                                <div class="operation-button-item">
                                    <span class="operation-button-icon"></span>
                                    <span class="button-label">收藏</span>
                                </div>
                                <div class="operation-button-item">
                                    <span class="operation-button-icon"></span>
                                    <span class="button-label">评论</span>
                                </div>
                            </div>
                        </div>  
                        <div class="create-time">
                        
                        </div>     
                        <h2 class="title">持续做好“近”文章！修文县：五年投入150亿打通发展大“动脉”</h2>
                    </header>
                    <p class="article-content">1、article标签是 HTML 5 的新标签。它的内容独立于文档的其余部分，而外bai部内容可以是来自一个外部的新闻提供者的一篇新的文章，或者来自 blog 的文本，或者是来自论坛的文本。亦或是来自其他外部源内容。
2、aside为语义化标签，通常用来描述与文档主体内容不相关的内容。比如，博客文章用atricle标签，而博客旁边的文章信息栏(作者头像、博文分类、作者等级等于博客正文内容无关的)用aside。
百度知道是问答网站，主体就是提问和回答，所以提问回答这边是用article，而右边那个用户信息、升级进度，广告和推荐的知识那些与该问题的回答和提问内容都无关，与主题内容不相关的区域用的就是aside。简单的说aside可用作通用信息展示（信息栏）等。</p>
                </article>
                <article>
                    <header>
                        <img src="http://demo2.cssmoban.com/cssthemes6/juli-master/images/blog-1-1000x600.jpg" class="poster-image" alt="">
                        <div class="operation-button-box">
                            <div class="left">tags</div>
                            <div class="right">
                                <div class="operation-button-item">
                                    <span class="operation-button-icon"></span>
                                    <span class="button-label">分享</span>
                                </div>
                                <div class="operation-button-item">
                                    <span class="operation-button-icon"></span>
                                    <span class="button-label">收藏</span>
                                </div>
                                <div class="operation-button-item">
                                    <span class="operation-button-icon"></span>
                                    <span class="button-label">评论</span>
                                </div>
                            </div>
                        </div>  
                        <div class="create-time">
                        
                        </div>     
                        <h2 class="title">持续做好“近”文章！修文县：五年投入150亿打通发展大“动脉”</h2>
                    </header>
                    <p class="article-content">1、article标签是 HTML 5 的新标签。它的内容独立于文档的其余部分，而外bai部内容可以是来自一个外部的新闻提供者的一篇新的文章，或者来自 blog 的文本，或者是来自论坛的文本。亦或是来自其他外部源内容。
2、aside为语义化标签，通常用来描述与文档主体内容不相关的内容。比如，博客文章用atricle标签，而博客旁边的文章信息栏(作者头像、博文分类、作者等级等于博客正文内容无关的)用aside。
百度知道是问答网站，主体就是提问和回答，所以提问回答这边是用article，而右边那个用户信息、升级进度，广告和推荐的知识那些与该问题的回答和提问内容都无关，与主题内容不相关的区域用的就是aside。简单的说aside可用作通用信息展示（信息栏）等。</p>
                </article>
            </div>
            <aside>
                <div class="about-author-box">
                    <div class="avatar-box"></div>
                    <div class="social-box">
                        <div class="social-item"></div>
                        <div class="social-item"></div>
                        <div class="social-item"></div>
                        <div class="social-item"></div>
                    </div>
                    <div class="nick-name">套路师</div>
                    <div class="profile-box"></div>
                </div>
            </aside>
        </div>
    </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import Header from './components/Header.vue'
export default defineComponent({
    components: {
        Header
    },
    setup() {
        return {}
    }
})
</script>
<style lang="scss" scoped>
.home-box {
    width: 100vw;
    display: flex;
    flex-direction: column;
    align-items: center;
    .content {
        width: 1248px;
        padding: 20px 0;
        display: flex;
        flex-direction: row;
        .article-list {
            width: calc(100%*2/3);
            box-sizing: border-box;
            margin-right: 20px;
            article {
                header {
                   .poster-image {
                       width: 100%;
                   }
                   .operation-button-box {
                       display: flex;
                       flex-direction: row;
                       justify-content: space-between;
                       margin: 30px 0 15px;
                       .right {
                           display: flex;
                           flex-direction: row; 
                           color: #666;          
                       }
                   } 
                   .title {
                       font-size: 27px;
                       font-weight: 500;
                       color: #444;
                       margin: 20px 0 15px;
                   }

                }
                .article-content {
                    font-size: 15px;
                    line-height: 1.5;
                    font-weight: 400;
                    color: #555;
                }    
            }
            
        }
    }
    aside {
        width: calc(100%/3);
        box-sizing: border-box;
        padding: 0 15px;
        .about-author-box {
            width: 100%;
            margin-top: 30px;
            padding: 0 30px 30px;
            box-shadow: 0px 10px 40px rgba(0,0,0,.2);
            display: flex;
            flex-direction: column;
            align-items: center;
            .avatar-box {
                height: 150px;
                width: 150px;
                background: #444;
                transform: translateY(-30px);
            }
        }
    }
}

</style>