import { Element, Component, State, Prop, Listen } from '@stencil/core';

@Component({
  tag: 'header-bar',
  styleUrl: 'header-bar.css',
  scoped: true
})
export class HeaderBar {
  @Element() el: Element;

  @State() isOverlay: boolean = false;

  @Prop() query: string = '';
  @Prop() isSearchVisible: boolean = false;

  @Listen('window:scroll')
  handleScroll() {
    requestAnimationFrame(this.checkScroll.bind(this));
  }

  checkScroll() {
    const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
    if (scrollTop > 30) {
      this.isOverlay = true;
    } else {
      this.isOverlay = false;
    }
  }

  render() {
    return (
    <header class={`${this.isSearchVisible ? 'visible-search' : ''} ${this.isOverlay? 'overlay' : ''}`}>
      <div class="container">
        <div class="logo">
          <a href='/'>
            <svg width="32px" height="32px" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg">
              <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                <g id="icon" fill-rule="nonzero">
                  <circle id="circle" fill="#EAEEF5" cx="16" cy="16" r="16"></circle>
                  <circle id="circle_copy" fill="#B4C1D8" cx="16" cy="16" r="11"></circle>
                  <circle id="circle_copy_2" fill="#647AA1" cx="16" cy="16" r="6"></circle>
                  <circle id="circle_copy_3" fill="#647AA1" cx="23.5" cy="8.5" r="2"></circle>
                </g>
              </g>
            </svg>
            Ionicons
          </a>
          <span class="version">v4.0.1</span>
        </div>
        <icon-search query={this.query} size="small"></icon-search>
        <nav>
          <span class="active">Icons</span>
          <a href='https://github.com/ionic-team/ionicons/blob/master/readme.md'>Usage</a>
          <a href='https://github.com/ionic-team/ionicons'>
            Github
            <svg width="12px" height="12px" viewBox="0 0 12 12" version="1.1" xmlns="http://www.w3.org/2000/svg">
              <g transform="translate(0,1)">
                <rect id="bg" fill="#CDD6E5" x="0" y="2" width="9" height="9" rx="1.5"></rect>
                <path d="M9.18198052,1 L6.5,1 L6.5,0 L11,0 L11,1 L11,4.5 L10,4.5 L10,1.59619408 L4.02512627,7.57106781 L3.31801948,6.86396103 L9.18198052,1 Z" id="arrow" fill="#A4AEC3"></path>
              </g>
            </svg>
          </a>
          <a class="btn" href='/svg/ionicons.zip'>Download SVGs</a>
        </nav>
      </div>
    </header>
  )}
}
