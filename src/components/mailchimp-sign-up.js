import React from "react"
import { Collapse } from "antd"

import "./mailchimp-sign-up.scss"

const mailchimpEmbed = () => ({
  __html:
    '<!-- Begin Mailchimp Signup Form --><link href="//cdn-images.mailchimp.com/embedcode/classic-10_7.css" rel="stylesheet" type="text/css"><style type="text/css">	#mc_embed_signup{background:#fff; clear:left; font:14px Helvetica,Arial,sans-serif; }	/* Add your own Mailchimp form style overrides in your site stylesheet or in this style block.	   We recommend moving this block and the preceding CSS link to the HEAD of your HTML file. */</style><div id="mc_embed_signup"><form action="https://breadandrosesdsa.us12.list-manage.com/subscribe/post?u=7501a181ef3bdb0c071852e85&amp;id=da21753316" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" class="validate" target="_blank" novalidate>    <div id="mc_embed_signup_scroll"><div class="mc-field-group">	<label for="mce-EMAIL">Email Address  <span class="asterisk">*</span></label>	<input type="email" value="" name="EMAIL" class="required email" id="mce-EMAIL"></div><div class="mc-field-group">	<label for="mce-FNAME">First Name </label>	<input type="text" value="" name="FNAME" class="" id="mce-FNAME"></div><div class="mc-field-group">	<label for="mce-LNAME">Last Name </label>	<input type="text" value="" name="LNAME" class="" id="mce-LNAME"></div><div class="mc-field-group size1of2">	<label for="mce-PHONE">Phone Number </label>    <div class="phonefield phonefield-us">        (<span class="phonearea"><input class="phonepart " pattern="[0-9]*" id="mce-PHONE-area" name="PHONE[area]" maxlength="3" size="3" value="" type="text"></span>)        <span class="phonedetail1"><input class="phonepart " pattern="[0-9]*" id="mce-PHONE-detail1" name="PHONE[detail1]" maxlength="3" size="3" value="" type="text"></span> -         <span class="phonedetail2"><input class="phonepart " pattern="[0-9]*" id="mce-PHONE-detail2" name="PHONE[detail2]" maxlength="4" size="4" value="" type="text"></span></div></div><div class="mc-field-group input-group">    <strong>I\'m planning to: </strong>    <ul><li><input type="radio" value="1" name="group[19229]" id="mce-group[19229]-19229-0"><label for="mce-group[19229]-19229-0">Vote for the full slate</label></li><li><input type="radio" value="2" name="group[19229]" id="mce-group[19229]-19229-1"><label for="mce-group[19229]-19229-1">Vote for part of the slate</label></li></ul></div>	<div id="mce-responses" class="clear">		<div class="response" id="mce-error-response" style="display:none"></div>		<div class="response" id="mce-success-response" style="display:none"></div>	</div>    <!-- real people should not fill this in and expect good things - do not remove this or risk form bot signups-->    <div style="position: absolute; left: -5000px;" aria-hidden="true"><input type="text" name="b_7501a181ef3bdb0c071852e85_da21753316" tabindex="-1" value=""></div>    <div class="clear"><input type="submit" value="Submit" name="subscribe" id="mc-embedded-subscribe" class="button"></div>    </div></form></div><script type=\'text/javascript\' src=\'//s3.amazonaws.com/downloads.mailchimp.com/js/mc-validate.js\'></script><script type=\'text/javascript\'>(function($) {window.fnames = new Array(); window.ftypes = new Array();fnames[0]=\'EMAIL\';ftypes[0]=\'email\';fnames[1]=\'FNAME\';ftypes[1]=\'text\';fnames[2]=\'LNAME\';ftypes[2]=\'text\';fnames[4]=\'PHONE\';ftypes[4]=\'phone\';}(jQuery));var $mcj = jQuery.noConflict(true);</script><!--End mc_embed_signup--></div>',
})

const MailChimpSignUp = () => (
  <div className="mailchimp-wrapper">
    <Collapse>
      <Collapse.Panel header="Support Us">
        <div dangerouslySetInnerHTML={mailchimpEmbed()}></div>
      </Collapse.Panel>
    </Collapse>
  </div>
)

export default MailChimpSignUp
