// JavaScript Document
window.addEventListener('load', function() {
  var loadingScreen = document.getElementById('loading-screen');
  var content = document.getElementById('top');
  
  // Menghilangkan loading screen
  loadingScreen.style.display = 'none';
  
  // Menampilkan konten
  content.style.display = 'block';
});

	function myFunction() {
		var x = document.getElementById("myLinks");
		if (x.style.display === "block") {
			x.style.display = "none";
		} else {
			x.style.display = "block";
		}
	}
		
	gsap.registerPlugin(ScrollTrigger);
	
	var classes = ['.project','#kontak','#pengalaman','#pengalaman__ormawa','#skill','#kejuaraan'];
	
	classes.forEach(function(className){
		gsap.to(className, {
			opacity: 1,
			duration: 0.8, // Durasi animasi (dalam detik)
			scrollTrigger: {
				trigger: className, // Trigger untuk animasi (bisa elemen atau string selector)
				start: 'top 90%', // Memulai animasi ketika trigger mencapai 80% viewport
				toggleActions: 'play none', // Tindakan yang diambil saat trigger masuk dan keluar viewport
//      			scrub: true,
      			ease: 'power1.inOut' // Efek scroll yang halus
			}
		});
	});
	document.getElementById('hamburger-menu').addEventListener('click',function(){
		this.classList.toggle('open');
	});
	
	window.addEventListener('scroll', function() {
		var navbar = document.getElementById('myNavbar');
		if (window.scrollY > 50) {
			navbar.style.backgroundColor = 'rgba(255, 255, 255, 0.5)'; // Ubah warna latar belakang navbar saat discroll
			navbar.style.backdropFilter='blur(200px)';
		} else {
			navbar.style.backgroundColor = 'transparent'; // Kembalikan ke transparan jika scroll ke atas
		}
	});
	