/**
 * @namespace WebAccount
 */

/**
 * @typedef {Object} WebAccount.CustomLink
 * @property {boolean} show - if true, will display the link
 * @property {string} label - link label
 * @property {string} replacement - URL to redirect to, can start with HTTPS or can follow SW6 redirectTo schema
 */

/**
 * @typedef {Object} WebAccount.Config
 * @property {boolean} showOverview
 * @property {boolean} showProfile
 * @property {boolean} showAddresses
 * @property {boolean} showOrders
 * @property {string} urlSlugToReplace
 * @property {string} overviewReplacement
 * @property {string} profileReplacement
 * @property {string} addressReplacement
 * @property {string} ordersReplacement
 * @property {Object.<string, WebAccount.CustomLink>} customerLinks
 */
