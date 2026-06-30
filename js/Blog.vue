<template>
  <div class="blog">
    <article class="blog-post">
      <h1>Blog</h1>
      <div class="blog-body">
        <p>{{ t('blog.welcome') }}</p>
        <p>{{ t('blog.description') }}</p>
        <div class="blog-posts">
          <article class="post-item">
            <div class="post-header">
              <span class="post-tag">{{ t('blog.tag.released') }}</span>
              <time>{{ postDate }}</time>
            </div>
            <h2>{{ postTitle }}</h2>
            <p>{{ postExcerpt }}</p>
            <a href="#" class="post-link">{{ t('blog.readMore') }}</a>
          </article>
        </div>
      </div>
    </article>
  </div>
</template>

<script setup>
import { t } from './i18n/lang.js'

const postDate = '2025'
const postTitle = 'Gemma 4'
const postExcerpt = t('blog.description')
</script>

<style>
.blog {
  padding: 48px 20px 64px;
  max-width: 900px;
  margin: 0 auto;
  font-family: inherit;
}

.blog-post {
  background: rgba(255, 255, 255, 0.025);
  border: 1px solid rgba(255, 255, 255, 0.065);
  border-radius: 14px;
  overflow: hidden;
  color: rgba(255, 255, 255, 0.84);
}

.blog-post h1 {
  margin: 0;
  padding: 28px 26px 16px;
  font-size: clamp(1.4em, 3.2vw, 1.9em);
  font-weight: 800;
  letter-spacing: -0.8px;
  color: #ffffff;
}

.blog-body {
  padding: 24px 26px;
  line-height: 1.65;
  font-size: clamp(0.95em, 2.1vw, 1.08em);
}

.blog-posts {
  display: flex;
  flex-direction: column;
  gap: 18px;
  margin-top: 24px;
}

.post-item {
  padding: 20px;
  background: rgba(255, 255, 255, 0.02);
  border: 1px solid rgba(255, 255, 255, 0.055);
  border-radius: 11px;
  transition: border-color 0.18s ease, background 0.18s ease;
}

.post-item:hover {
  background: rgba(255, 255, 255, 0.03);
  border-color: rgba(255, 255, 255, 0.1);
}

.post-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
  margin-bottom: 10px;
  font-size: 0.78em;
}

.post-tag {
  display: inline-block;
  padding: 3px 10px;
  background: rgba(102, 252, 245, 0.09);
  border: 1px solid rgba(102, 252, 245, 0.22);
  border-radius: 7px;
  color: rgba(102, 252, 245, 0.82);
  font-weight: 600;
}

.post-item h2 {
  margin: 0 0 10px;
  font-size: clamp(1.15em, 2.5vw, 1.4em);
  font-weight: 700;
  letter-spacing: -0.3px;
}

.post-item p {
  font-size: 1em;
  line-height: 1.55;
  color: rgba(255, 255, 255, 0.58);
}

.post-link {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 7px 18px;
  background: rgba(102, 252, 245, 0.12);
  border: 1px solid rgba(102, 252, 245, 0.28);
  border-radius: 8px;
  color: #ffffff;
  text-decoration: none;
  font-size: 0.88em;
  font-weight: 600;
  transition: all 0.18s ease;
}

.post-link:hover {
  background: rgba(102, 252, 245, 0.18);
  border-color: rgba(102, 252, 245, 0.42);
  transform: translateY(-1px);
}
</style>
