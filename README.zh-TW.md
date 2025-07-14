# 雲端個人履歷網站

> 一個部署在 AWS 上的個人履歷網站，使用 React + Vite 開發，並且實現完整的 CI/CD 自動部署流程。

## 技術架構

* 前端：React + Vite
* 雲端服務：AWS S3、CloudFront、Route 53、ACM
* HTTPS：ACM 憑證（us-east-1 區域）搭配自訂網域
* CI/CD：使用 GitHub Actions，自動部署至 S3 並清除 CloudFront 快取

## 專案特色

* 使用 Vite 建構現代化前端應用
* 透過 GitHub Actions 建立自動化部署流程（CI/CD）
* 靜態網站部署於 S3，並使用 CloudFront CDN 支援 HTTPS 及快取管理
* 自訂網域透過 Route 53 設定與 ACM 憑證加密
* 每次推送程式碼，GitHub Actions 會自動建構、部署及清除快取

## 本地開發快速啟動

```bash
npm install
npm run dev
```

本地開啟網址 `http://localhost:5173`

## 打包建置

```bash
npm run build
```

會在 `/dist` 目錄輸出生產環境靜態檔案，用於部署。

## CI/CD 流程說明

每次推送（push）到 GitHub 上的 `main` 分支時，自動執行：

1. 安裝依賴套件
2. 建構專案（`npm run build`）
3. 同步 `/dist` 資料夾內容到指定的 S3 Bucket
4. 執行 CloudFront 快取失效（invalidate）動作

此流程確保部署自動化，免去手動操作 AWS 控制台。

## AWS 與 DevOps 技術應用

* AWS IAM 使用者及權限控管，確保部署安全
* S3 靜態網站托管及權限設定
* CloudFront HTTPS 配置與快取管理
* Route 53 自訂網域 DNS 設定
* GitHub Actions CI/CD 配置與 Secrets 使用
* 安全性最佳實踐（避免 AWS 金鑰外洩）

## 線上預覽

[https://joannechou-portfolio.com](https://joannechou-portfolio.com)


