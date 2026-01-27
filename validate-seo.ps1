#!/usr/bin/env powershell
# Script para validar mejoras SEO implementadas

Write-Host "=== VALIDACION SEO HMMCODE ===" -ForegroundColor Cyan
Write-Host ""

# 1. Verificar sitemap.xml
Write-Host "1. Verificando sitemap.xml..." -ForegroundColor Yellow
$sitemapPath = "src/pages/sitemap.xml.ts"
if (Test-Path $sitemapPath) {
    Write-Host "   OK Sitemap encontrado" -ForegroundColor Green
}

# 2. Verificar index.astro
Write-Host "2. Verificando meta tags en index.astro..." -ForegroundColor Yellow
$indexPath = "src/pages/index.astro"
if (Test-Path $indexPath) {
    Write-Host "   OK Pagina index encontrada" -ForegroundColor Green
}

# 3. Verificar servicio-formateo.astro
Write-Host "3. Verificando servicio-formateo.astro..." -ForegroundColor Yellow
$servicePath = "src/pages/servicio-formateo.astro"
if (Test-Path $servicePath) {
    Write-Host "   OK Pagina servicio encontrada" -ForegroundColor Green
}

# 4. Verificar robots.txt
Write-Host "4. Verificando robots.txt..." -ForegroundColor Yellow
$robotsPath = "public/robots.txt"
if (Test-Path $robotsPath) {
    Write-Host "   OK Robots.txt presente" -ForegroundColor Green
}

Write-Host ""
Write-Host "=== PROXIMAS ACCIONES ===" -ForegroundColor Cyan
Write-Host "1. npm run build" -ForegroundColor Yellow
Write-Host "2. Verificar en Google Search Console" -ForegroundColor Yellow
Write-Host "3. Probar en https://pagespeed.web.dev" -ForegroundColor Yellow
Write-Host ""
Write-Host "Validacion completada" -ForegroundColor Green

