/**
 * MyFooter component
 * 
 * This component renders a footer with social media icons and a copyright notice.
 * 
 * @class
 * @extends HTMLElement
 */
export class MyFooter extends HTMLElement {    
    constructor() {
        super()
    }

    connectedCallback() {
        const socials = [
            {
                'url': '#',
                'image': '/assets/images/facebook.svg',
                'alt': 'facebook'
            },
            {
                'url': '#',
                'image': '/assets/images/x.svg',
                'alt': 'x'
            },
            {
                'url': '#',
                'image': '/assets/images/instagram.svg',
                'alt': 'instagram'
            },
            {
                'url': '#',
                'image': '/assets/images/linkedin.svg',
                'alt': 'linkedin'
            },
            {
                'url': '#',
                'image': '/assets/images/youtube.svg',
                'alt': 'youtube'
            },
        ]

        const elFooterSocial = document.createElement('div');
        const elFooterCopyRight = document.createElement('div');


        elFooterSocial.classList.add('footer-social');
        elFooterCopyRight.classList.add('footer-copy-right');

        socials.forEach(element => {
            elFooterSocial.innerHTML += `
            <a href="${element.url}"><img src="${element.image}" alt="${element.alt}" /></a>
        `
        })

        elFooterCopyRight.innerHTML = `
            <div>Copyright &copy; 2024 Pav Munyphalla | All Rights Reserved</div>
        `

        this.append(elFooterSocial)
        this.append(elFooterCopyRight)
        this.classList.add('footer')
    }
}
customElements.define('my-footer', MyFooter)
