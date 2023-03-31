---
title: Masked Autoencoders Are Scalable Vision Learners
description: These are my notes after reading the paper on Masked Autoencoders and their usage on ICDAR Historical Documents dataset
slug: scientific-papers/masked-autoencoder
authors:
  - name: Vishnudev Krishnadas
    title: MSc in Artificial Intelligence at Friedrich-Alexander-Universität
    url: https://github.com/vishnu-dev
    image_url: https://github.com/vishnu-dev.png
tags: [machine-learning, deep-learning]
image: https://user-images.githubusercontent.com/11435359/146857310-f258c86c-fde6-48e8-9cee-badd2b21bd2c.png
hide_table_of_contents: false
---

### Overview
Masked Autoencoders are self-supervised learners for computer vision which can generate representations of data in a scalable way.

### Approach
They start by masking random patches of the input image and reconstruct the missing pixels.

Consists of encoder-decoder architechture as follows:
1. **Encoder**: Operates on visible patches in the image
2. **Decoder**: Lightweight decoder that reconstructs original image from masked tokens and representation generated from encoder.

They mask a high proportion of the input image i.e. 75% which leads to a self-supervisory task. The model learns to generate the masked patches from the visible patches.




