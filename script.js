const videos = [
    { id: 1, title: 'The Complete Deadpool Timeline! | Stan Lee Presents', embedUrl: 'https://www.youtube.com/embed/mpi96syD2gQ?si=0WH0XOi7v1nGWsBl', channel: 'Stab Lee Presents', views: '385K views.1 mon ago' },
    { id: 2, title: 'I trained with OLYMPIC Athlete', embedUrl: 'https://www.youtube.com/embed/T2KfM0J17bA?si=go0ihNce0py1r8qX', channel: 'Jesse James West', views: '800K views.1 day ago' },
    { id: 3, title: 'productive homebody vlog🧸: back home after 7 months, reorganizing my entire room, trying crumbl', embedUrl: 'https://www.youtube.com/embed/bQ62VMueb4A?si=vSohrdolP08_QQCe', channel:'Saranghoe', views:'214K views.3 days ago' },
    { id: 4, title: 'Tom Holland and Zendaya facetime with Korean kid (eng cc)', embedUrl: 'https://www.youtube.com/embed/p48D2NqM9KE?si=PdAXfbMfG9psXk1m',channel:'ODG',views:'8M Views.2 years ago' },
    { id: 4, title: 'Guest Hosts Ryan Reynolds & Hugh Jackman Interview Each Other', embedUrl: 'https://www.youtube.com/embed/Jvgm3IT5DsI?si=74rlzr8QHzVOOTzy',channel:'Jimmy Kimmel Live',views:'3M Views.13 days ago' },
    { id: 4, title: 'I Filmed Plants For 15 years | Time-lapse Compilation', embedUrl: 'https://www.youtube.com/embed/NtsJ5m6C7dU?si=mynN4mEUnDyIMYLf',channel:'Boxlapse',views:'12M Views.1 month ago' },// Add more videos here
];

function displayVideos(videoList) {
    const videoListContainer = document.getElementById('video-list');
    videoListContainer.innerHTML = '';

    videoList.forEach(video => {
        const videoCard = document.createElement('div');
        videoCard.classList.add('video-card');

        const iframe = document.createElement('iframe');
        iframe.src = video.embedUrl;
        iframe.allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture";
        iframe.allowFullscreen = true;

        const info = document.createElement('div');
        info.classList.add('info');

        const title = document.createElement('h4');
        title.textContent = video.title;

        const channel = document.createElement('p');
        channel.textContent = video.channel;

        const views = document.createElement('p');
        views.textContent = video.views;

        info.appendChild(title);
        videoCard.appendChild(iframe);
        videoCard.appendChild(info);
        info.appendChild(channel);
        info.appendChild(views);
        videoListContainer.appendChild(videoCard);
    });
}

function searchVideos() {
    const query = document.getElementById('search').value.toLowerCase();
    const filteredVideos = videos.filter(video => video.title.toLowerCase().includes(query));
    displayVideos(filteredVideos);
}
function toggleSidebar() {
    const sidebar = document.getElementById('sidebar');
    const content = document.getElementById('content');
    sidebar.classList.toggle('active');
    content.classList.toggle('shifted');
}




// Initial display of videos
displayVideos(videos);
