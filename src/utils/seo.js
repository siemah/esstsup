/**
 * SEO utils modules
 * @namespace agence62
 * @name seo
 * @author siemah
 * @version 0.1.0
 */

 /**
  * get meta tag data from cms backend(wordpress) who has name attribute not null
  * @param {array} yoast_meta list of YOAST wordpress plugin meta tags
  */
export const getBackendSEOMetas = (yoast_meta) => {
  let _results = {};
  yoast_meta.forEach(metaitem => {
    if(metaitem.name !== null)
      _results[metaitem.name] = metaitem.content;
  });
  return _results;
}

/**
 * get social SEO meta tag from yoast plugin(from wordpress) 
 * like openGraph and twitter meta tags 
 * @param {array} yoast_meta list of YOAST wordpress plugin meta tags
 */
export const getBackendSEOSocialMetas = (yoast_meta, pageData) => {
  const { mainDomain, path, } = pageData;
  return yoast_meta.map(metaitem => {
    if(metaitem.property === 'og:url') 
      metaitem.content = `${mainDomain}${path}`;
    
    return metaitem;
  });
}
