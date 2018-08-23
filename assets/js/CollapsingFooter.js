import jQuery from 'jquery';

/**
 * Allows footer button elements with class .footer-btn to both collapse and
 * expand the following div with class .footer-btn-content
 */
class CollapsingFooter {
  constructor() {
    jQuery('.footer-btn').click(this.toggleContent);
  }

  toggleContent() {
    // Only usable on small screens under 768px width
    // TODO: Remove hardcoded width value! Find dynamic solution with bootstrap
    if (jQuery(window).width() > 768) {
      return;
    }

    jQuery(this).toggleClass('active-footer-btn');
    let content = jQuery(this).next('.footer-btn-content');
    if (content.height()) {
      content.css('maxHeight', 0);
    } else {
      content.css('maxHeight', content.prop('scrollHeight') + 'px');
    }
  }
}

export default CollapsingFooter;
