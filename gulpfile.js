#!/usr/bin/env node

"use strict";

const { src, dest } = require('gulp');
const imagemin = require('gulp-imagemin');
 
exports.default = () => (
    src(['./**/*.{jpg,jpeg,png}', '!node_modules/**'])
        .pipe(imagemin())
        .pipe(dest('.'))
);
