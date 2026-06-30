<template>
  <footer class="footer">
    <div class="footer-top">
      <div class="sponsored">
        <span>{{ t('sponsors.title') }}</span>
        <span class="sponsored-label">{{ t('sponsors.sponsoredBy') }}</span>
      </div>
    </div>
    <div class="footer-content">
      <div class="footer-main">
        <div class="footer-logo">
          <span>Gemma 4</span>
        </div>
        <div class="footer-links">
          <div class="link-group">
            <span class="label">{{ t('developmentStatus.active') }}</span>
            <router-link to="/models#gemma-4h">{{ t('modelsList.gemma4h') }}</router-link>
          </div>
        </div>
      </div>
      <div class="footer-bottom">
        <div class="copyright">
          <span class="at">{{ t('copyright.at') }}</span>
          <span>2025</span>
        </div>
        <div class="license">
          <a href="https://deepmind.google/open-source" class="license-link">Google Open Source Policy</a>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { t } from '../i18n/lang.js'
</script>

<style>
.footer {
  width: 100%;
  background: linear-gradient(180deg, rgba(10, 10, 26, 0.92) 0%, rgba(10, 10, 26, 0.98) 100%);
  border-top: 1px solid rgba(255, 255, 255, 0.06);
  box-shadow: 0 -8px 32px rgba(0, 0, 0, 0.35);
}

.footer-top {
  padding: 16px 24px;
  text-align: right;
  border-bottom: 1px solid rgba(255, 255, 255, 0.04);
}

.footer-content {
  max-width: 1200px;
  margin: 0 auto;
  padding: 28px 24px 36px;
}

.sponsored {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 4px;
  font-size: 0.76em;
  color: rgba(255, 255, 255, 0.38);
  font-weight: 500;
  letter-spacing: 0.2px;
}

.sponsored-label {
  color: rgba(255, 255, 255, 0.28);
}

.footer-main {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 18px;
  padding-bottom: 12px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.035);
}

.footer-logo {
  font-size: clamp(1.3em, 2.8vw, 1.7em);
  font-weight: 800;
  color: #e8edf0;
  letter-spacing: -0.8px;
}

.footer-links {
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
}

.link-group {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 0.82em;
}

.link-group .label {
  color: rgba(255, 255, 255, 0.32);
  font-weight: 500;
}

.link-group a {
  color: rgba(255, 255, 255, 0.62);
  text-decoration: none;
  font-weight: 500;
  transition: color 0.12s ease;
}

.link-group a:hover {
  color: #e8edf0;
}

.footer-bottom {
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 8px;
  font-size: 0.78em;
  color: rgba(255, 255, 255, 0.24);
}

.license-link {
  color: rgba(255, 255, 255, 0.32);
}

.license-link:hover {
  color: rgba(255, 255, 255, 0.5);
}
</style>
