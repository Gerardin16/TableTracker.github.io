// JavaScript to display links when a row is clicked
document.querySelectorAll('.grid-row').forEach(row => {
    row.addEventListener('click', function() {
        // Hide all other link columns
        document.querySelectorAll('.links-column').forEach(col => col.style.display = 'none');
        
        // Get the links column for this row
        const linksColumn = this.querySelector('.links-column');
        linksColumn.innerHTML = ''; // Clear previous links

        // Display the links for this row
        const links = this.getAttribute('data-links').split(',');
        links.forEach(link => {
            const anchor = document.createElement('a');
            anchor.href = link.trim();
            anchor.textContent = link.trim();
            anchor.target = "_blank";
            linksColumn.appendChild(anchor);
            linksColumn.appendChild(document.createElement('br'));
        });

        // Show the links column
        linksColumn.style.display = 'block';
    });
});
