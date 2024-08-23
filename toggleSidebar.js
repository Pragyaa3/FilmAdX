document.addEventListener('DOMContentLoaded', function () {
    const sidebar = document.querySelector('.sidebar');
    const sidebarLinks = document.querySelectorAll('.sidebar .links li');

    // Function to toggle the sidebar
    function toggleSidebar() {
        sidebar.classList.toggle('active');
    }

    // Event listener for clicking on the sidebar
    sidebar.addEventListener('click', toggleSidebar);

    // Close sidebar when a link is clicked
    sidebarLinks.forEach(link => {
        link.addEventListener('click', () => {
            sidebar.classList.remove('active');
        });
    });
});
