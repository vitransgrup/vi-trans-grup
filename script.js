const WA="6283829506945";
const wa=t=>`https://wa.me/${WA}?text=${encodeURIComponent(t)}`;
const base="Halo VI Trans Grup, saya ingin menanyakan jadwal dan ketersediaan perjalanan.";
document.getElementById("float").href=wa(base);
document.getElementById("waContact").href=wa(base);
const d=document.getElementById("date"), now=new Date();
d.min=new Date(now-now.getTimezoneOffset()*60000).toISOString().slice(0,10);
document.getElementById("bookForm").addEventListener("submit",e=>{
 e.preventDefault();
 const v=id=>document.getElementById(id).value.trim();
 const pretty=new Date(v("date")+"T00:00:00").toLocaleDateString("id-ID",{day:"numeric",month:"long",year:"numeric"});
 const msg=`Halo VI Trans Grup, saya ingin booking perjalanan.

Nama: ${v("name")}
WhatsApp: ${v("phone")}
Layanan: ${v("service")}
Jemput: ${v("pickup")}
Tujuan: ${v("destination")}
Tanggal: ${pretty}
Jam: ${v("time")}
Penumpang: ${v("passengers")}
Armada: ${v("vehicle")}
Catatan: ${v("note")||"-"}

Mohon konfirmasi jadwal, ketersediaan kursi, dan tarif. Terima kasih.`;
 window.open(wa(msg),"_blank","noopener,noreferrer");
});
const mb=document.getElementById("menu"), nav=document.getElementById("nav");
mb.onclick=()=>{const o=nav.classList.toggle("open");mb.setAttribute("aria-expanded",o)};
document.querySelectorAll("#nav a").forEach(a=>a.onclick=()=>nav.classList.remove("open"));
document.getElementById("year").textContent=new Date().getFullYear();
