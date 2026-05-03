# Hamrohio — serverga deploy (64.23.243.111, hamrohio.tech)

## 1. Domen (controlpanel.tech dan sotilgan)

- **Domen:** hamrohio.tech  
- **Control panel:** https://controlpanel.tech/ — u yerdan DNS sozlang.

**DNS sozlash (controlpanel.tech panelida):**

- **A record:** `@` (yoki `hamrohio.tech`) → `64.23.243.111`
- **A record:** `www` → `64.23.243.111` (ixtiyoriy, agar www kerak bo‘lsa)

Saqlang va 5–30 daqiqa kuting (propagatsiya).

---

## 2. Serverda birinchi marta sozlash (64.23.243.111)

SSH orqali kirish:

```bash
ssh root@64.23.243.111
```

### Node.js 18+ o‘rnatish

```bash
curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
sudo apt-get install -y nodejs
node -v   # v20.x ko‘rsatishi kerak
```

### Loyiha papkasi va PM2

```bash
sudo mkdir -p /var/www/hamrohio
sudo chown $USER:$USER /var/www/hamrohio
```

Keyin **lokal mashinangizda** birinchi marta build qilib, standalone + static + public ni serverga yuboring (yoki quyidagi “Lokal mashinadan deploy” bo‘limidagi `deploy.sh` dan foydalanishingiz mumkin).

Serverda:

```bash
cd /var/www/hamrohio/standalone
pm2 start server.js --name hamrohio -- --port 3000
pm2 save
pm2 startup   # boot da avtostart (ko‘rsatilgan buyruqni ishlating)
```

---

## 3. Nginx (hamrohio.tech → localhost:3000)

Serverda:

```bash
sudo apt-get install -y nginx
sudo nano /etc/nginx/sites-available/hamrohio.tech
```

Quyidagini yozing (fayl boshidan oxirigacha):

```nginx
server {
    listen 80;
    server_name hamrohio.tech www.hamrohio.tech;
    location / {
        proxy_pass http://127.0.0.1:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
        proxy_cache_bypass $http_upgrade;
    }
}
```

Saqlang (Ctrl+O, Enter, Ctrl+X). Keyin:

```bash
sudo ln -sf /etc/nginx/sites-available/hamrohio.tech /etc/nginx/sites-enabled/
sudo nginx -t
sudo systemctl reload nginx
```

Endi http://hamrohio.tech ochilishi kerak (port 80).

---

## 4. HTTPS (SSL) — Let’s Encrypt

Domen server IP (64.23.243.111) ga to‘g‘ri yo‘naltirilgan bo‘lsa:

```bash
sudo apt-get install -y certbot python3-certbot-nginx
sudo certbot --nginx -d hamrohio.tech -d www.hamrohio.tech
```

So‘rovlarda email kiriting, shartnomalarni qabul qiling. Certbot avtomatik nginx konfigini https ga o‘zgartiradi. Natijada https://hamrohio.tech ishlashi kerak.

---

## 5. Lokal mashinadan o‘zgarishlarni serverga yuborish

Loyiha papkasida (masalan: `~/Developer/hamrohio`):

```bash
chmod +x deploy.sh
./deploy.sh
```

Birinchi marta SSH kalitni qo‘shish so‘raladi — `yes` deb tasdiqlang.

**O‘zgarishlar:**  
Har safar kod o‘zgargach `./deploy.sh` ishlatilsa — build qilinadi, `.next/standalone`, `.next/static` va `public` serverga yuboriladi va PM2 qayta ishga tushadi. Sayt https://hamrohio.tech da yangilanadi.

---

## Qisqa xulosa

| Qadam | Vazifa |
|-------|--------|
| 1 | controlpanel.tech da hamrohio.tech uchun A record → 64.23.243.111 |
| 2 | Serverda Node 18+, loyiha papkasi, PM2 sozlash |
| 3 | Nginx da hamrohio.tech → 127.0.0.1:3000 |
| 4 | certbot bilan HTTPS yoqish |
| 5 | Keyingi yangilanishlar uchun: `./deploy.sh` |

Domen yangi sozlangan bo‘lsa, 5–30 daqiqa kutib https://hamrohio.tech ni tekshiring.
