var listPlaylist = [
    {
        name: "V-Pop: The A-List",
        creator: "Zing MP3",
        image: "./assets/img/playlists/playlist1.jpg"
    },
    {
        name: "Rồi Tới Luôn",
        creator: "Nal",
        image: "./assets/img/playlists/playlist2.jpg"
    },
    {
        name: "Nhạc Q.Tế",
        creator: "Lạc Trôi",
        image: "./assets/img/playlists/playlist3.jpg"
    },
    {
        name: "Những bản hit của Rap Việt",
        creator: "Bigcityboi",
        image: "./assets/img/playlists/playlist4.jpg"
    },
    {
        name: "Những Bài Hát Hay Nhất Của Jimmii Nguyễn",
        creator: "Jimmii Nguyễn",
        image: "https://photo-resize-zmp3.zadn.vn/w320_r1x1_webp/cover/e/7/9/2/e7925cdbed9a2b1159b8e63832ec5626.jpg"
    },
    {
        name: "Tuyển Tập những bài hát hay của Đình Dũng",
        creator: "Đình Dũng",
        image: "./assets/img/playlists/Dinh.Dung-Playlist.jpg"
    },
    {
        name: "Em Hát Ai Nghe",
        creator: "Ngọc Trâm",
        image: "./assets/img/playlists/playlist7.jpg"
    },
    {
        name: "Chill cùng Đen Vâu",
        creator: "Trà My",
        image: "./assets/img/playlists/playlist8.jpg"
    },
    {
        name: "Những bản hit hay nhất của Sơn Tùng MTP",
        creator: "Nguyễn Thành Công",
        image: "./assets/img/playlists/playlist9.jpg"
    },
    {
        name: "Thế Giới V-Pop Vol. 3",
        creator: "Zing MP3",
        image: "./assets/img/playlists/playlist10.jpg"
    },
    {
        name: "BodyTalk",
        creator: "Lâm Huy",
        image: "./assets/img/playlists/playlist11.jpg"
    },
    {
        name: "Playlist Này Chill Phết",
        creator: "Zing MP3",
        image: "./assets/img/playlists/playlist12.jpg"
    },
    {
        name: "BlackJack",
        creator: "Zing MP3",
        image: "./assets/img/playlists/playlist13.jpg"
    },
    {
        name: "4U - On Repeat",
        creator: "Zing MP3",
        image: "./assets/img/playlists/playlist14.jpg"
    },
    {
        name: "Những Bài Hát Hay Nhất Của Mr. Siro",
        creator: "Zing MP3",
        image: "./assets/img/playlists/playlist15.jpg"
    },
    {
        name: "Top EDM Songs Of 2018",
        creator: "Zing MP3",
        image: "./assets/img/playlists/playlist16.jpg"
    },
    {
        name: "Giai Điệu Và Trào Lưu Gây Sốt",
        creator: "Zing MP3",
        image: "./assets/img/playlists/playlist17.jpg"
    },
    {
        name: "Những Bài Hát Hay Nhất Của HKT",
        creator: "Zing MP3",
        image: "./assets/img/playlists/playlist18.jpg"
    },
    {
        name: "100% Gây Nghiện",
        creator: "Zing MP3",
        image: "./assets/img/playlists/playlist19.jpg"
    },
    {
        name: "Nhạc Việt Được Nghe Nhiều Nhất",
        creator: "Zing MP3",
        image: "./assets/img/playlists/playlist20.jpg"
    },
    {
        name: "Dance Việt Hay Nhất",
        creator: "Zing MP3",
        image: "./assets/img/playlists/playlist21.jpg"
    },
];

const PLAYLIST_STORAGE_KEY = 'VIK_PLAYLIST';

localStorage.setItem(PLAYLIST_STORAGE_KEY, JSON.stringify(listPlaylist));
