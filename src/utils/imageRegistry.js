// Central image registry for all static assets
// This approach allows us to keep image paths in JSON while working with Vite's static imports

// Headshots
import joelPolo from '@/assets/images/headshots/joel-polo.jpg';
import joelTie from '@/assets/images/headshots/joel-tie.jpg';

// Research
import cartpole from '@/assets/images/research/cartpole.png';
import shubble from '@/assets/images/projects/shubble.png';

// Groups
import rpiTennis from '@/assets/images/groups/rpi_tennis_2023_2024.jpeg';
import rpisecGroup from '@/assets/images/groups/rpisec_group.jpg';

// Logo
import logo from '@/assets/images/logo.png';

// Experience logos
import mitreLogo from '@/assets/images/experience/mitre-logo.png';
import xpHealthLogo from '@/assets/images/experience/xphealth-logo.png';
import rpiLogo from '@/assets/images/rpi-logo.png';

// Create a mapping from path strings to imported modules
const imageRegistry = {
  'headshots/joel-polo.jpg': joelPolo,
  'headshots/joel-tie.jpg': joelTie,
  'research/cartpole.png': cartpole,
  'projects/shubble.png': shubble,
  'groups/rpi_tennis_2023_2024.jpeg': rpiTennis,
  'groups/rpisec_group.jpg': rpisecGroup,
  'logo.png': logo,
  'experience/mitre-logo.png': mitreLogo,
  'experience/xphealth-logo.png': xpHealthLogo,
  'rpi-logo.png': rpiLogo
};

/**
 * Get an imported image URL from a path string
 * @param {string} path - The relative path to the image (e.g., 'headshots/joel-polo.jpg')
 * @returns {string} The imported image URL
 */
export function getImage(path) {
  const image = imageRegistry[path];
  if (!image) {
    console.error(`Image not found in registry: ${path}`);
    return '';
  }
  return image;
}

/**
 * Get multiple images from path strings
 * @param {string[]} paths - Array of image paths
 * @returns {Object} Object mapping paths to imported URLs
 */
export function getImages(paths) {
  return paths.reduce((acc, path) => {
    acc[path] = getImage(path);
    return acc;
  }, {});
}

export default imageRegistry;
