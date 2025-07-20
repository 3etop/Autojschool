# 🚀 DEPLOYMENT INSTRUCTIES - RIVEROS AUTORIJSCHOOL

## ✅ PRE-DEPLOYMENT CHECKLIST

### 1. Bestanden controle
- [x] index.html - Homepage met juiste paths
- [x] assets/css/styles.css - Hoofdstijlen  
- [x] assets/js/scripts.js - JavaScript functionaliteit
- [x] assets/images/ - Alle afbeeldingen en video
- [x] robots.txt - SEO crawling instructies
- [x] sitemap.xml - Website structuur
- [x] .htaccess - Server configuratie
- [x] README.md - Documentatie

### 2. Nederlandse hosting voorbereiding
✅ **Aanbevolen providers voor .nl domein:**
- TransIP.nl (€2.50/maand)
- Versio.nl (€3.95/maand)  
- Hostnet.nl (€4.95/maand)
- Antagonist.nl (€6.95/maand)

## 📁 UPLOAD INSTRUCTIES

### Stap 1: FTP/SFTP Toegang
1. Open je FTP client (FileZilla, WinSCP, of hosting panel)
2. Verbind met je hosting account
3. Navigeer naar `public_html` of `www` map

### Stap 2: Upload alle bestanden
```
Upload alle bestanden EXACT zoals ze zijn georganiseerd:

public_html/
├── index.html
├── robots.txt  
├── sitemap.xml
├── .htaccess
└── assets/
    ├── css/
    │   └── styles.css
    ├── js/
    │   └── scripts.js
    └── images/
        └── [alle afbeeldingen]
```

### Stap 3: Permissies instellen
- **Bestanden**: 644
- **Mappen**: 755
- **.htaccess**: 644

## 🔧 DNS & DOMEIN CONFIGURATIE

### Voor .nl domein (aanbevolen):
- `riverosautorijschool.nl`
- `autorijschoolriveros.nl` 
- `rijschoolzutphen.nl`

### DNS Records instellen:
```
A Record: @ → [IP van hosting]
A Record: www → [IP van hosting]
CNAME: www → riverosautorijschool.nl
```

## 🌐 NA DEPLOYMENT TESTEN

### ✅ Controleer deze items:
1. **Homepage laadt correct**: https://joudomein.nl
2. **SSL certificaat actief**: Groene hangslot in browser
3. **Contactformulier werkt**: Test via Formspree
4. **WhatsApp button functioneert**: Opent WhatsApp correct
5. **Responsive design**: Test op mobiel/tablet
6. **Afbeeldingen laden**: Alle images/video zichtbaar
7. **Snelheid**: Laadtijd onder 3 seconden

### 🔍 SEO Verificatie:
1. **Google Search Console**: Voeg domein toe
2. **Google My Business**: Update website URL  
3. **Bing Webmaster**: Registreer website
4. **Sitemap submit**: Submit sitemap.xml

## 📱 GOOGLE MY BUSINESS UPDATE

Na deployment:
1. Login op Google My Business
2. Update website URL naar nieuwe domein
3. Voeg nieuwe foto's toe van website
4. Update bedrijfsinformatie indien nodig

## 🛠️ TROUBLESHOOTING

### Veelvoorkomende problemen:

**❌ Afbeeldingen laden niet:**
- Controleer of `assets/images/` map correct geupload is
- Verifieer bestandsnamen (hoofdlettergevoelig)

**❌ CSS styling mist:**
- Check of `assets/css/styles.css` aanwezig is
- Controleer .htaccess MIME types

**❌ Contactformulier werkt niet:**
- Verifieer Formspree endpoint in HTML
- Test CORS headers in .htaccess

**❌ HTTPS redirect werkt niet:**
- Controleer .htaccess upload
- Verifieer SSL certificaat activatie

## 📞 SUPPORT CONTACTEN

### Hosting provider support:
- **TransIP**: support@transip.nl
- **Versio**: klantenservice@versio.nl
- **Hostnet**: support@hostnet.nl

### Voor technische vragen:
- Email: riveroschelo@gmail.com
- Tel: +31 651 196 657

## 🎯 POST-DEPLOYMENT ACTIES

### Week 1:
- [ ] Monitor website prestaties
- [ ] Controleer Google Analytics (indien toegevoegd)
- [ ] Test alle formulieren
- [ ] Check mobiele weergave

### Maand 1:
- [ ] SEO positie monitoring
- [ ] Google My Business optimalisatie
- [ ] Backup strategie implementeren
- [ ] Performance optimalisatie

---

🚗 **Riveros Autorijschool** - Professionele rijlessen in Zutphen
📧 riveroschelo@gmail.com | 📞 +31 651 196 657
