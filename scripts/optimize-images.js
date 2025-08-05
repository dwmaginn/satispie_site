const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

// Configuration
const inputDir = 'src/assets/images';
const outputDir = 'src/assets/images/optimized';
const publicDir = 'public';
const publicOutputDir = 'public/optimized';

// Ensure output directories exist
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}
if (!fs.existsSync(publicOutputDir)) {
  fs.mkdirSync(publicOutputDir, { recursive: true });
}

// Image optimization function
async function optimizeImage(inputPath, outputPath, options = {}) {
  const {
    quality = 80,
    width,
    height,
    format = 'webp'
  } = options;

  try {
    let pipeline = sharp(inputPath);
    
    if (width || height) {
      pipeline = pipeline.resize(width, height, {
        fit: 'inside',
        withoutEnlargement: true
      });
    }

    if (format === 'webp') {
      pipeline = pipeline.webp({ quality });
    } else if (format === 'jpeg') {
      pipeline = pipeline.jpeg({ quality });
    } else if (format === 'png') {
      pipeline = pipeline.png({ quality });
    }

    await pipeline.toFile(outputPath);
    
    const stats = fs.statSync(outputPath);
    const originalStats = fs.statSync(inputPath);
    const compressionRatio = ((originalStats.size - stats.size) / originalStats.size * 100).toFixed(1);
    
    console.log(`✅ Optimized: ${path.basename(inputPath)} -> ${path.basename(outputPath)}`);
    console.log(`   Size: ${(stats.size / 1024).toFixed(1)}KB (${compressionRatio}% reduction)`);
    
    return { success: true, size: stats.size, compressionRatio };
  } catch (error) {
    console.error(`❌ Failed to optimize ${inputPath}:`, error.message);
    return { success: false, error: error.message };
  }
}

// Main optimization process
async function optimizeAllImages() {
  console.log('🚀 Starting image optimization...\n');

  // Optimize src/assets/images
  const imageFiles = [
    { input: 'satispie-hero-pies.png', output: 'satispie-hero-pies.webp', options: { quality: 85, width: 1200 } },
    { input: 'satispie-default-pie.png', output: 'satispie-default-pie.webp', options: { quality: 85, width: 800 } },
    { input: 'app-store-badge.png', output: 'app-store-badge.webp', options: { quality: 90 } },
    { input: 'google-play-badge.png', output: 'google-play-badge.webp', options: { quality: 90 } }
  ];

  for (const file of imageFiles) {
    const inputPath = path.join(inputDir, file.input);
    const outputPath = path.join(outputDir, file.output);
    
    if (fs.existsSync(inputPath)) {
      await optimizeImage(inputPath, outputPath, file.options);
    } else {
      console.log(`⚠️  Skipping ${file.input} - file not found`);
    }
  }

  // Optimize public images
  const publicImageFiles = [
    { input: 'satispie-logo.png', output: 'satispie-logo.webp', options: { quality: 90 } },
    { input: 'satispie-logo.svg', output: 'satispie-logo.svg', options: { format: 'svg' } } // SVG doesn't need optimization
  ];

  for (const file of publicImageFiles) {
    const inputPath = path.join(publicDir, file.input);
    const outputPath = path.join(publicOutputDir, file.output);
    
    if (fs.existsSync(inputPath)) {
      if (file.input.endsWith('.svg')) {
        // Copy SVG as-is
        fs.copyFileSync(inputPath, outputPath);
        console.log(`✅ Copied: ${file.input} -> ${file.output}`);
      } else {
        await optimizeImage(inputPath, outputPath, file.options);
      }
    } else {
      console.log(`⚠️  Skipping ${file.input} - file not found`);
    }
  }

  console.log('\n🎉 Image optimization complete!');
  console.log('\n📁 Optimized images saved to:');
  console.log(`   - ${outputDir}/`);
  console.log(`   - ${publicOutputDir}/`);
}

// Run the optimization
optimizeAllImages().catch(console.error); 