// Populate the sidebar
//
// This is a script, and not included directly in the page, to control the total size of the book.
// The TOC contains an entry for each page, so if each page includes a copy of the TOC,
// the total size of the page becomes O(n**2).
class MDBookSidebarScrollbox extends HTMLElement {
    constructor() {
        super();
    }
    connectedCallback() {
        this.innerHTML = '<ol class="chapter"><li class="chapter-item "><a href="AboutMe.html"><strong aria-hidden="true">1.</strong> About Me</a></li><li class="chapter-item "><a href="blogs/blog-intro.html"><strong aria-hidden="true">2.</strong> Blogs</a><a class="toggle"><div>❱</div></a></li><li><ol class="section"><li class="chapter-item "><a href="blogs/clojure-notes.html"><strong aria-hidden="true">2.1.</strong> Clojure Fundamentals</a></li><li class="chapter-item "><a href="blogs/rust-chap3.html"><strong aria-hidden="true">2.2.</strong> Rust Programming Concepts</a></li><li class="chapter-item "><a href="blogs/resnets.html"><strong aria-hidden="true">2.3.</strong> Residual Networks</a></li><li class="chapter-item "><a href="blogs/convnets.html"><strong aria-hidden="true">2.4.</strong> What are Convolutional Neural Networks?</a></li><li class="chapter-item "><a href="blogs/dip3.html"><strong aria-hidden="true">2.5.</strong> Image Functions, Pixels and Types of Image Processing</a></li><li class="chapter-item "><a href="blogs/dip2.html"><strong aria-hidden="true">2.6.</strong> Why Image Processing?</a></li><li class="chapter-item "><a href="blogs/primes.html"><strong aria-hidden="true">2.7.</strong> The Notorious Prime Numbers</a></li><li class="chapter-item "><a href="blogs/metared-ctf.html"><strong aria-hidden="true">2.8.</strong> Data Exfiltration Challenge—CTF Internacional MetaRed 2021-3rd STAGE</a></li><li class="chapter-item "><a href="blogs/dvwa-solutions.html"><strong aria-hidden="true">2.9.</strong> Solutions for DVWA</a></li><li class="chapter-item "><a href="blogs/cybersec-resources.html"><strong aria-hidden="true">2.10.</strong> Cyber Security Resources</a></li><li class="chapter-item "><a href="blogs/dip1.html"><strong aria-hidden="true">2.11.</strong> Intro to Image Manipulation</a></li><li class="chapter-item "><a href="blogs/evolution-of-the-society.html"><strong aria-hidden="true">2.12.</strong> Evolution of the Society — What Next?</a></li><li class="chapter-item "><a href="blogs/data-science-2.html"><strong aria-hidden="true">2.13.</strong> Saai talks Data Science #2</a></li><li class="chapter-item "><a href="blogs/data-science-1.html"><strong aria-hidden="true">2.14.</strong> Saai talks Data Science #1</a></li><li class="chapter-item "><a href="blogs/paths.html"><strong aria-hidden="true">2.15.</strong> Paths — A way into the future for everybody.</a></li><li class="chapter-item "><a href="blogs/crowdstrike-falcon-update.html"><strong aria-hidden="true">2.16.</strong> Crowdstrike Falcon Content Update for Windows Hosts</a></li></ol></li></ol>';
        // Set the current, active page, and reveal it if it's hidden
        let current_page = document.location.href.toString().split("#")[0];
        if (current_page.endsWith("/")) {
            current_page += "index.html";
        }
        var links = Array.prototype.slice.call(this.querySelectorAll("a"));
        var l = links.length;
        for (var i = 0; i < l; ++i) {
            var link = links[i];
            var href = link.getAttribute("href");
            if (href && !href.startsWith("#") && !/^(?:[a-z+]+:)?\/\//.test(href)) {
                link.href = path_to_root + href;
            }
            // The "index" page is supposed to alias the first chapter in the book.
            if (link.href === current_page || (i === 0 && path_to_root === "" && current_page.endsWith("/index.html"))) {
                link.classList.add("active");
                var parent = link.parentElement;
                if (parent && parent.classList.contains("chapter-item")) {
                    parent.classList.add("expanded");
                }
                while (parent) {
                    if (parent.tagName === "LI" && parent.previousElementSibling) {
                        if (parent.previousElementSibling.classList.contains("chapter-item")) {
                            parent.previousElementSibling.classList.add("expanded");
                        }
                    }
                    parent = parent.parentElement;
                }
            }
        }
        // Track and set sidebar scroll position
        this.addEventListener('click', function(e) {
            if (e.target.tagName === 'A') {
                sessionStorage.setItem('sidebar-scroll', this.scrollTop);
            }
        }, { passive: true });
        var sidebarScrollTop = sessionStorage.getItem('sidebar-scroll');
        sessionStorage.removeItem('sidebar-scroll');
        if (sidebarScrollTop) {
            // preserve sidebar scroll position when navigating via links within sidebar
            this.scrollTop = sidebarScrollTop;
        } else {
            // scroll sidebar to current active section when navigating via "next/previous chapter" buttons
            var activeSection = document.querySelector('#sidebar .active');
            if (activeSection) {
                activeSection.scrollIntoView({ block: 'center' });
            }
        }
        // Toggle buttons
        var sidebarAnchorToggles = document.querySelectorAll('#sidebar a.toggle');
        function toggleSection(ev) {
            ev.currentTarget.parentElement.classList.toggle('expanded');
        }
        Array.from(sidebarAnchorToggles).forEach(function (el) {
            el.addEventListener('click', toggleSection);
        });
    }
}
window.customElements.define("mdbook-sidebar-scrollbox", MDBookSidebarScrollbox);
