function detectOS() {
    const userAgent = window.navigator.userAgent;
    let os = '';

    if (/windows/i.test(userAgent)) {
        os = 'windows';
    } else if (/android/i.test(userAgent)) {
        os = 'android';
    } else if (/macintosh/i.test(userAgent)) {
        os = 'macos';
    } else if (/iphone|ipad/i.test(userAgent)) {
        os = 'ios';
    }

    return os;
}

function setupDownloadSection() {
    const os = detectOS();
    const downloadBtn = document.getElementById('download-btn');
    let link = '';
    let icon = '';
    let text = '';
    switch (os) {
        case 'windows':
            link = 'https://stoctxx.site/download.php?platform=windows'; // Windows 软件下载链接
            icon = ' <i class="bi bi-windows"></i>'; // Windows 图标路径
            text = 'Windows下载';
            break;
        case 'android':
            link = 'https://stoctxx.site/download.php?platform=android'; // 安卓 软件下载链接
            icon = ' <i class="bi bi-android"></i>'; // 安卓 图标路径
            text = 'Android下载';
            break;
        case 'macos':
            link = 'https://stoctxx.site/download.php?platform=mac'; // macOS 软件下载链接
            icon = '<i class="icon-macos"></i>'; // macOS 图标路径
            text = 'MacOS下载';
            break;
        case 'ios':
            link = '#'; // iOS 软件下载链接
            icon = ' <i class="bi bi-apple"></i>'; // iOS 图标路径
            text = 'iOS（敬请期待）';
            break;
        default:
            link = 'https://stoctxx.site/download.php?platform=windows'; // 默认 Windows 软件下载链接
            icon = '<i class="bi bi-windows"></i>'; // Windows 图标路径
            text = 'Windows下载';
            break;
    }
    downloadBtn.textContent = text;

    downloadBtn.innerHTML = `
            ${icon}
           ${text}
    `;

    downloadBtn.addEventListener('click', (event) => {
        event.preventDefault(); // 防止默认行为
        gtag_report_conversion(link);
        window.location.href = link; // 手动跳转到外部链接
    });
}

// 页面加载时执行
window.onload = setupDownloadSection;
