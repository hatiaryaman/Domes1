const logoutNav = document.getElementsByClassName('logout')[0]
const mainNav = document.getElementsByClassName('main')[0]
const signUpNav = document.getElementsByClassName('signup')[0]
const loginNav = document.getElementsByClassName('login')[0]
const userNav = document.getElementsByClassName('userName')[0]
const learnNav = document.getElementsByClassName('learn')[0]
const shareNav = document.getElementsByClassName('share')[0]
const stuffNav = document.getElementsByClassName('mystuff')[0]
const accountNav = document.getElementsByClassName('myaccount')[0]

mainNav.addEventListener('click', function() {
    window.location.href = '../Home/home.html'
})

learnNav.addEventListener('click', function() {
    window.location.href = '../Learn/learn.html'
})

shareNav.addEventListener('click', function() {
    if (userName == null) {
        window.location.href = '../Login/login.html'
    }
})

stuffNav.addEventListener('click', function() {
    window.location.href = '../Mystuff/mystuff.html'
})

accountNav.addEventListener('click', function() {
    window.location.href = '../Account/account.html'
})

logoutNav.addEventListener('click', function() {
    localStorage.removeItem('Username')
    localStorage.removeItem('UserId')
    localStorage.removeItem('email')

    window.location.href = "../Lesson/lesson.html"
})

var userName = localStorage.getItem('Username')
    
if (userName != null) {
    loginNav.style.display = "none"
    signUpNav.style.display = "none"
    userNav.innerHTML = userName

    document.getElementsByClassName('div-block-3')[0].style.display = "none"
} else {
    userNav.style.display = "none"
    document.getElementsByClassName('user')[0].style.display = "none"
}

const lessonTitle = document.getElementsByClassName('text-block-14')[0]
lessonTitle.innerHTML = localStorage.getItem('title')