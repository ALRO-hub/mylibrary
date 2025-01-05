document.getElementById("form-transaksi").addEventListener("submit", function (e) {
    e.preventDefault();
  
    const judul = document.getElementById("judul").value;
    const nama = document.getElementById("nama").value;
  
    if (judul && nama) {
      const tbody = document.getElementById("daftar-transaksi");
  
      const row = document.createElement("tr");
      row.innerHTML = `
        <td>${judul}</td>
        <td>${nama}</td>
      `;
  
      tbody.appendChild(row);
  
      document.getElementById("form-transaksi").reset();
      alert("Transaksi berhasil disimpan!");
    } else {
      alert("Semua field harus diisi!");
    }
  });
  