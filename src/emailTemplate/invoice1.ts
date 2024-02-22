export const INVOICE = (
  data
) => `<!DOCTYPE html>
<html data-scrapbook-source="https://invoices.razorpay.com/v1/t/inv_NGyYZzbqut6Sg7" data-scrapbook-create="20231226134749900" data-scrapbook-title="Invoice">
   <head>
      <title>Invoice</title>
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta charset="UTF-8">
      <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
      <meta name="robots" content="noindex">
      <meta name="viewport" content="user-scalable=no,width=device-width,initial-scale=1,maximum-scale=1">
      <link href="css.css" rel="stylesheet" type="text/css">
      <link rel="icon" href="favicon.png" type="image/x-icon">
      <style>
         * {
         box-sizing: border-box;
         }
         body {
         margin: 0;
         font-family: "Lato",ubuntu,helvetica,sans-serif;
         color: #414141;
         background: #fff;
         }
         #success path {
         fill: #6DCA00;
         }
         #failure path {
         fill: #e74c3c;
         }
         h3 {
         font-weight: normal;
         }
         .card {
         background: #fff;
         border-radius: 2px;
         box-shadow: 0 2px 9px rgba(0, 0, 0, 0.1);
         padding: 30px;
         margin: 30px auto;
         width: 80%;
         max-width: 300px;
         text-align: center;
         }
         #break {
         color: #777;
         font-size: 14px;
         margin: 30px -30px 0;
         padding: 30px 30px 0;
         border-top: 1px dashed #e3e4e6;
         text-align: left;
         line-height: 24px;
         }
         #break span {
         float: right;
         }
         #success {
         display: none;
         }
         .paid #success {
         display: block;
         }
         .issued #partial {
         display: none;
         }
         #button {
         background-color: #4994E6;
         color: #fff;
         border: 0;
         outline: none;
         cursor: pointer;
         font: inherit;
         margin-top: 10px;
         padding: 10px 20px;
         border-radius: 2px;
         }
         #button:active {
         box-shadow: 0 0 0 1px rgba(0,0,0,.15) inset, 0 0 6px rgba(0,0,0,.2) inset;
         }
         body div.redirect-message {
         display: none;
         }
         body.has-redirect div.redirect-message {
         display: block;
         }
      </style>
      <style type="text/css">@import url("css-1.css");</style>
      <style type="text/css">* {
         margin: 0;
         padding: 0;
         }
         @page {
         size: A4;
         }
         html,
         body {
         font-family: 'Nunito Sans', Helvetica, sans-serif;
         font-size: 14px;
         color: rgba(0,0,0,0.87);
         line-height: 1.45;
         min-height: 99%;
         }
         @media print {
         html,
         body {
         min-height: 270mm;
         font-size: 11pt;
         -webkit-print-color-adjust: exact;
         }
         }
         *,
         *::before,
         *::after {
         box-sizing: border-box;
         }
         a {
         color: #337ab7;
         text-decoration: none;
         cursor: pointer;
         }
         a:hover,
         a:focus {
         color: #23527c;
         }
         h3 {
         font-size: 20px;
         font-weight: normal;
         }
         p {
         margin-bottom: 10px;
         }
         table {
         border-collapse: collapse;
         border-spacing: 0;
         }
         address {
         font-style: normal;
         font-size: 90%;
         }
         img {
         max-height: 100%;
         max-width: 100%;
         }
         @page {
         size: A4;
         margin-top: 50pt;
         margin-bottom: 50pt;
         }
         .clearfix::before,
         .clearfix::after {
         content: '';
         display: block;
         clear: both;
         }
         .row::before,
         .row::after {
         content: '';
         display: block;
         clear: both;
         }
         .col-3,
         .col-4,
         .col-6,
         .col-9,
         .col-8,
         .col-12 {
         float: left;
         }
         .col-12 {
         width: 100%;
         }
         .col-9 {
         width: 75%;
         }
         .col-8 {
         width: 66.66666667%;
         }
         .col-6 {
         width: 50%;
         }
         .col-4 {
         width: 33.33333333%;
         }
         .col-3 {
         width: 25%;
         }
         .pull-right {
         float: right;
         }
         .text-right {
         text-align: right;
         }
         .text-success {
         color: #27c24c;
         }
         .alert-warning {
         padding: 12px;
         background-color: #fcf8e3;
         border: 1px solid #e8dcb5;
         color: #8a6d3b;
         border-radius: 4px;
         margin-bottom: 15px;
         }
         .table {
         width: 100%;
         max-width: 100%;
         margin-bottom: 30px;
         }
         @media screen and (max-device-width: 600px) {
         .table {
         table-layout: fixed;
         }
         }
         .table > tbody > tr {
         page-break-inside: avoid;
         }
         .table > tbody > tr > td,
         .table > thead > tr > th {
         text-align: left;
         vertical-align: top;
         }
         .table > tbody > tr > td.text-right,
         .table > thead > tr > th.text-right {
         text-align: right;
         }
         .table > tbody > tr > td.no-border,
         .table > thead > tr > th.no-border {
         border-bottom: 0;
         }
         .table > thead > tr > th {
         font-weight: normal;
         color: rgba(0,0,0,0.54);
         font-size: 12px;
         padding: 8px 16px;
         }
         @media screen and (max-device-width: 600px) {
         .table > thead > tr > th {
         padding-left: 8px;
         padding-right: 8px;
         }
         }
         .table > tbody > tr > td {
         padding: 16px;
         }
         .table > thead > tr > th:first-child,
         .table > tbody > tr > td:first-child {
         padding-left: 0;
         }
         .table > thead > tr > th:last-child,
         .table > tbody > tr > td:last-child {
         padding-right: 0;
         }
         .btn-toolbar {
         margin-top: 25px;
         margin-bottom: 25px;
         }
         .btn {
         font-family: 'Nunito Sans', Helvetica, sans-serif;
         background-color: transparent;
         border: 1px solid transparent;
         font-size: 14px;
         border-radius: 2px;
         line-height: inherit;
         width: 100%;
         display: block;
         padding-top: 15px;
         padding-bottom: 15px;
         transition: background-color 150ms linear;
         text-align: center;
         cursor: pointer;
         }
         .btn:hover,
         .btn:focus {
         outline: none;
         }
         .btn svg.icon + span {
         margin-left: 5px;
         }
         .btn-default {
         color: #666;
         font-weight: 400;
         background-color: #fafafa;
         border-color: #ddd;
         }
         .btn-default:hover,
         .btn-default:focus {
         background-color: #ededed;
         border-color: #d0d0d0;
         }
         .btn-default:hover,
         .btn-default:focus {
         color: #666;
         }
         .btn-primary {
         font-size: 16px;
         color: #fff;
         background-color: #6a5dd1;
         border-color: #6a5dd1;
         }
         .btn-primary:hover,
         .btn-primary:focus {
         background-color: #5849cb;
         border-color: #5849cb;
         }
         .btn-group-vertical .btn:not(:first-child) {
         border-top-left-radius: 0;
         border-top-right-radius: 0;
         border-top: 0;
         }
         .btn-group-vertical .btn:not(:last-child) {
         border-bottom-left-radius: 0;
         border-bottom-right-radius: 0;
         }
         .icon {
         display: inline-block;
         width: 18px;
         height: 18px;
         stroke-width: 0;
         stroke: currentColor;
         fill: currentColor;
         vertical-align: text-bottom;
         }
         .media-wrapper .media {
         width: 48px;
         height: 48px;
         float: left;
         }
         .media-wrapper .media + .media-body {
         padding-left: 18px;
         }
         .media-wrapper .media-body {
         display: table-cell;
         vertical-align: middle;
         }
         .amount {
         white-space: nowrap;
         }
         .merchant-footer {
         text-align: center;
         padding: 8px;
         }
         .merchant-footer h4 {
         font-weight: 700;
         font-size: 14px;
         }
         .merchant-footer address {
         font-size: 10px;
         }
         .merchant-footer address img {
         vertical-align: middle;
         margin-left: 5px;
         }
         .merchant-footer address span {
         display: inline-block;
         }
         .invoice,
         .mobile .rzp-branding {
         background-color: #fff;
         border-radius: 4px;
         box-shadow: 0 0 8px 0 rgba(0,0,0,0.1);
         }
         @media print {
         .invoice,
         .mobile .rzp-branding {
         box-shadow: none;
         }
         }
         @media screen and (max-device-width: 600px) {
         .invoice {
         padding: 24px;
         padding-bottom: 88px;
         }
         }
         @media print {
         .invoice {
         padding: 0 0 88px;
         }
         }
         .invoice .invoice-branding {
         padding-top: 40px;
         }
         .invoice .testmode-warning {
         padding-left: 40px;
         padding-right: 40px;
         text-align: center;
         font-size: 12px;
         border: 0;
         border-bottom-left-radius: 0;
         border-bottom-right-radius: 0;
         }
         .invoice .tax-details .tax-heading {
         color: #bcbcbc;
         }
         .invoice .merchant-name {
         font-weight: 700;
         }
         @media print {
         .invoice .merchant-name {
         font-size: 16pt;
         }
         }
         .invoice .media-wrapper .media-left,
         .invoice .media-wrapper .media-body {
         display: inline-block;
         }
         .invoice .media-wrapper .media-left {
         vertical-align: top;
         }
         .invoice .inv__merchant-logo {
         margin-right: 8px;
         margin-bottom: 8px;
         }
         .invoice .inv__merchant-logo img {
         max-height: 48px;
         max-width: 48px;
         }
         @media print {
         .invoice .item-name,
         .invoice .rate,
         .invoice .qty,
         .invoice .amount,
         .invoice .inv-subtotal,
         .invoice .inv-total {
         font-weight: 10pt;
         }
         }
         .invoice .inv-comments {
         white-space: pre-line;
         }
         @media print {
         .invoice .inv-comments {
         font-size: 10pt;
         }
         }
         .invoice .rzp-header-branding {
         text-align: right;
         line-height: 1.2;
         color: rgba(0,0,0,0.54);
         font-size: 10px;
         }
         @media screen and (max-device-width: 600px) {
         .invoice .rzp-header-branding {
         font-size: 12px;
         }
         }
         @media print {
         .invoice .rzp-header-branding {
         font-size: 9pt;
         }
         }
         .invoice .invoice-id-label {
         display: inline;
         font-weight: 800;
         }
         @media print {
         .invoice .invoice-id-label {
         font-size: 16pt;
         }
         }
         .invoice .invoice-id {
         margin-left: 5px;
         color: rgba(0,0,0,0.54);
         font-weight: 600;
         }
         @media print {
         .invoice .invoice-id {
         font-size: 12pt;
         }
         }
         .invoice .invoice-row {
         margin-bottom: 40px;
         }
         .invoice .invoice-row:not(.no-padding) {
         padding-left: 40px;
         padding-right: 40px;
         }
         @media screen and (max-device-width: 600px) {
         .invoice .invoice-row {
         margin-bottom: 0;
         }
         }
         @media screen and (max-device-width: 600px) {
         .invoice .invoice-row > .col-12,
         .invoice .invoice-row > .col-8,
         .invoice .invoice-row > .col-4 {
         width: 100%;
         text-align: left;
         margin-bottom: 40px;
         }
         }
         .invoice .inv__amountcontainer {
         margin-top: 12px;
         padding-left: 40px;
         padding-right: 40px;
         }
         .invoice .inv__amountcontainer td {
         padding-bottom: 0px;
         }
         .invoice .inv-summary {
         margin-top: 4px;
         }
         .invoice .inv__itemcontainer-header th {
         font-weight: bold;
         }
         .invoice .inv__itemcontainer .table {
         margin-bottom: 0px;
         }
         .invoice .inv__itemcontainer .table thead {
         background-color: #f0f0f0;
         }
         .invoice .inv__itemcontainer .table tbody tr {
         padding-top: 8px;
         padding-bottom: 8px;
         }
         .invoice .inv__itemcontainer .table tbody tr:nth-of-type(odd) {
         background-color: #fafafa;
         }
         @media print {
         .invoice .inv__itemcontainer .table tbody tr:nth-of-type(odd) {
         background-color: #fff;
         }
         }
         .invoice .inv__itemcontainer .table tr th:first-child,
         .invoice .inv__itemcontainer .table tr td:first-child {
         padding-left: 40px;
         }
         .invoice .inv__itemcontainer .table tr th:last-child,
         .invoice .inv__itemcontainer .table tr td:last-child {
         padding-right: 40px;
         }
         .invoice .inv__itemcontainer .item__taxes-names,
         .invoice .inv__itemcontainer .item__taxes-amounts {
         margin-top: 8px;
         }
         .invoice .inv__itemcontainer .item__taxes-names .tax-desc,
         .invoice .inv__itemcontainer .item__taxes-amounts .tax-desc {
         color: rgba(0,0,0,0.54);
         font-size: 12px;
         }
         .invoice .inv__itemtable .lineItem__item {
         width: 45%;
         }
         .invoice .inv__itemtable .lineItem__amount {
         width: 25%;
         }
         .invoice .inv__itemtable .lineItem__qty {
         width: 10%;
         }
         .invoice .inv__itemtable .lineItem__total {
         width: 20%;
         }
         .invoice label {
         margin-bottom: 4px;
         font-weight: bold;
         font-size: 12px;
         color: rgba(0,0,0,0.54);
         display: block;
         position: relative;
         }
         @media print {
         .invoice label {
         font-size: 10pt;
         }
         }
         .invoice .amount-due-container {
         position: relative;
         }
         .invoice .amount-due {
         display: inline-block;
         vertical-align: middle;
         position: relative;
         font-weight: 800;
         }
         @media print {
         .invoice .amount-due {
         font-size: 15pt;
         }
         }
         .invoice .amount-due-header {
         display: inline-block;
         vertical-align: middle;
         margin-right: 12px;
         }
         .invoice .amount-due-header::after {
         content: '';
         width: 20px;
         border: 1px solid #528ff0;
         position: absolute;
         bottom: -4px;
         left: 0;
         }
         .invoice .invoice-details {
         word-break: break-all;
         }
         @media print {
         .invoice .invoice-details {
         font-size: 11pt;
         }
         }
         .invoice .invoice-details > div {
         margin-bottom: 24px;
         }
         @media print {
         .invoice .invoice-details > div {
         font-size: 12pt;
         }
         }
         .invoice .item-desc {
         font-size: 13px;
         margin: 5px 0;
         white-space: pre-line;
         word-break: break-all;
         }
         .invoice .lineitems-container .table > tbody > tr.mobile-row {
         display: none;
         }
         .invoice .terms {
         white-space: pre-line;
         }
         .invoice .footer {
         padding-left: 40px;
         padding-right: 40px;
         color: rgba(0,0,0,0.4);
         background-color: #fafafa;
         text-align: center;
         }
         .invoice .inv__address-container {
         white-space: pre-line;
         }
         .invoice .total-amount-due {
         font-size: 1.3em;
         }
         .text-italics {
         font-style: italic;
         }
         .valign-top {
         vertical-align: top;
         }
         .table-responsive {
         overflow-x: auto;
         min-height: 0.01%;
         }
         @media screen and (max-width: 767px) {
         .table-responsive {
         width: 100%;
         margin-bottom: 15px;
         overflow-y: hidden;
         -ms-overflow-style: -ms-autohiding-scrollbar;
         }
         .table-responsive > .table {
         margin-bottom: 0;
         table-layout: auto;
         }
         .table-responsive > .table > thead > tr > th,
         .table-responsive > .table > tbody > tr > th,
         .table-responsive > .table > tfoot > tr > th,
         .table-responsive > .table > thead > tr > td,
         .table-responsive > .table > tbody > tr > td,
         .table-responsive > .table > tfoot > tr > td {
         white-space: nowrap;
         }
         }
         .tooltip-info {
         max-width: 250px;
         display: inline-block;
         position: absolute;
         margin-left: 12px;
         background: #dfebff;
         padding: 8px 14px;
         color: #666;
         border-radius: 2px;
         font-size: 13px;
         font-weight: normal;
         top: 50%;
         transform: translateY(-50%) translateX(-6px) scale(0.97);
         opacity: 0;
         pointer-events: none;
         transition: 0.2s;
         overflow-wrap: break-word;
         word-break: break-word;
         z-index: 2;
         }
         .tooltip-info ul {
         padding: 0;
         list-style: none;
         }
         .tooltip-info ul li:not(:last-child) {
         margin-bottom: 4px;
         }
         .tooltip-info:before {
         border: 8px solid transparent;
         border-right-color: #dfebff;
         content: '';
         position: absolute;
         right: 100%;
         top: 50%;
         margin-top: -8px;
         }
         @media (max-width: 1024px) {
         .tooltip-info {
         margin-left: 0;
         margin-top: 8px;
         left: 0;
         top: 100%;
         }
         .tooltip-info:before {
         border-right-color: transparent;
         border-bottom-color: #dfebff;
         right: auto;
         left: 0;
         top: -7px;
         }
         }
         .tooltip {
         width: 12px;
         height: 12px;
         display: inline-block;
         background-color: rgba(0,0,0,0.54);
         border-radius: 50%;
         color: #fff;
         vertical-align: middle;
         position: relative;
         margin-left: 4px;
         }
         .tooltip::after {
         content: 'i';
         display: block;
         font-size: 0.7em;
         text-align: center;
         position: absolute;
         left: 50%;
         transform: translateX(-50%);
         line-height: 12px;
         top: 1px;
         }
         .tooltip:hover+ .tooltip-info,
         .tooltip:focus+ .tooltip-info,
         .tooltip:active+ .tooltip-info {
         transform: translateY(-50%);
         opacity: 1;
         }
         @media (max-width: 1024px) {
         .tooltip {
         transform: none;
         }
         }
         @media print {
         .tooltip,
         .tooltip::after,
         .tooltip-info {
         display: none;
         }
         }
         .has-tooltip> span {
         vertical-align: middle;
         }
         .details80g {
         position: relative;
         padding: 28px 36px;
         }
         .details80g::before {
         content: '';
         display: block;
         position: absolute;
         top: 0;
         left: 36px;
         right: 36px;
         border-top: 1px solid rgba(7,38,84,0.1);
         }
         .details80g .signatory {
         margin-top: 24px;
         font-weight: bold;
         line-height: 18px;
         color: rgba(0,0,0,0.9);
         }
         .details80g .signatory-img {
         margin: 4px 0;
         }
         .details80g .signatory-img img {
         max-height: 84px;
         width: auto;
         }
         .details80g .signatory-text {
         font-size: 11px;
         font-weight: bold;
         line-height: 13px;
         color: rgba(0,0,0,0.5);
         }
         .outer-container {
         background-color: #fafafa;
         position: relative;
         min-height: 100vh;
         z-index: 0;
         }
         @media print {
         .outer-container {
         background-color: #fff;
         }
         }
         .outer-container:before {
         content: '';
         position: absolute;
         top: -54px;
         left: -24px;
         right: 0;
         height: 154px;
         background-color: #6a5dd1;
         background-image: linear-gradient(to bottom right, rgba(255,255,255,0.075), rgba(0,0,0,0.075));
         z-index: -1;
         width: 120%;
         transform: rotate(-3deg);
         }
         @media screen and (max-device-width: 600px) {
         .outer-container:before {
         display: none;
         }
         }
         @media print {
         .outer-container:before {
         display: none;
         }
         }
         .container {
         max-width: 1000px;
         margin: auto;
         padding: 32px 8px 75px 8px;
         }
         .container::before,
         .container::after {
         content: '';
         display: block;
         clear: both;
         }
         @media screen and (max-device-width: 600px) {
         .container {
         padding-top: 0;
         }
         }
         .invoice-container {
         background-color: #f2f2f2;
         border-radius: 4px;
         position: relative;
         z-index: 0;
         }
         @media screen and (max-device-width: 600px) {
         .invoice-container {
         width: 100%;
         float: none;
         }
         }
         @media print {
         .invoice-container {
         width: 100%;
         }
         }
         .invoice-container.torn {
         min-height: 761px;
         }
         @media screen and (max-device-width: 600px) {
         .invoice-container.torn {
         min-height: 500px;
         }
         }
         .invoice-container.torn .torn-inv-status {
         position: absolute;
         left: 50%;
         top: 50%;
         transform: translate(-50%, -50%);
         text-align: center;
         }
         .invoice-container.torn .torn-inv-status .torn-status-desc {
         color: rgba(0,0,0,0.54);
         }
         .invoice-container.torn .invoice {
         position: relative;
         border-bottom: 0;
         border-bottom-left-radius: 0;
         border-bottom-right-radius: 0;
         box-shadow: 0 -4px 8px 0 rgba(0,0,0,0.1);
         }
         .invoice-container.torn .invoice::after {
         content: '';
         display: block;
         z-index: -1;
         position: absolute;
         left: 0;
         right: 0;
         bottom: -32px;
         border-width: 14px 0 50px 1px;
         border-style: solid;
         border-image: url("") 50 25 repeat;
         }
         .invoice-container.torn .invoice .row:not(:nth-child(1)):not(:nth-child(2)) {
         display: none;
         }
         .invoice-container.torn .invoice .row:nth-child(2) {
         position: relative;
         z-index: 1;
         }
         .invoice-container.torn .invoice .row:nth-child(2) .amount-due,
         .invoice-container.torn .invoice .row:nth-child(2) .inv-summary {
         display: none;
         }
         @media screen and (max-device-width: 600px) {
         .invoice-container.torn .invoice .row:nth-child(2) .col-8 {
         margin-bottom: 0;
         }
         .invoice-container.torn .invoice .row:nth-child(2) .col-4 {
         display: none;
         }
         }
         .paid-stamp {
         display: inline-block;
         font-size: 26px;
         color: #ff2828;
         line-height: 1;
         border: 3px solid;
         padding: 2px 4px;
         border-radius: 6px;
         letter-spacing: 1px;
         transform: rotate(-15deg);
         position: absolute;
         right: 96%;
         top: -8px;
         }
         @media screen and (max-device-width: 600px) {
         .paid-stamp {
         right: auto;
         left: 96%;
         }
         }
         .invoicepage-header {
         color: #fff;
         }
         .invoicepage-header .header-desc {
         font-weight: 100;
         font-size: 14px;
         }
         .payment-cta {
         padding-top: 80px;
         }
         .payment-cta .payment-desc {
         line-height: 24px;
         }
         .payment-cta .payment-desc .partial-payment-desc {
         padding: 8px 0;
         border-top: 2px solid rgba(0,0,0,0.1);
         border-bottom: 2px solid rgba(0,0,0,0.1);
         margin-top: 16px;
         }
         .payment-cta .payment-desc .partial-payment-desc h3 {
         font-size: 15px;
         font-weight: 600;
         margin: 4px 0;
         }
         .payment-cta .payment-desc .partial-payment-desc p {
         color: rgba(0,0,0,0.54);
         line-height: 18px;
         }
         .cta {
         padding-left: 40px;
         }
         @media screen and (max-device-width: 600px) {
         .cta {
         display: none;
         }
         }
         @media print {
         .cta {
         display: none;
         }
         }
         .cta .invoicepage-header {
         height: 122px;
         }
         .cta .btn .inv_amount_text {
         margin-left: 3px;
         }
         .cta .payment-cta .payment-desc {
         padding-bottom: 25px;
         }
         .cta .payment-cta .cta-toolbar .btn-group-vertical {
         margin-top: 16px;
         }
         .rzp-branding {
         background-color: #fff;
         padding: 15px;
         border: 1px solid #e0e0e0;
         border-radius: 4px;
         font-size: 12px;
         line-height: 20px;
         }
         .rzp-branding p.desc {
         margin-top: 5px;
         margin-bottom: 0;
         }
         .rzp-branding .payment-methods {
         max-height: 16px;
         max-width: 220px;
         }
         .rzp-logo {
         display: inline-block;
         /* height: 26px;
         line-height: 25px; */
         margin-bottom: 5px;
         }
         .desktop {
         display: block;
         }
         @media screen and (max-device-width: 600px) {
         .desktop {
         display: none;
         }
         }
         .mobile {
         display: none;
         }
         @media screen and (max-device-width: 600px) {
         .mobile {
         display: block;
         }
         }
         .mobile .payment-cta {
         background-color: #fff;
         padding: 16px;
         }
         .mobile .rzp-branding {
         margin-top: 8px;
         padding: 18px 28px;
         color: rgba(0,0,0,0.54);
         }
         .mobile .rzp-branding .custom-branding {
         text-align: center;
         }
         .mobile .rzp-branding .custom-branding .rzp-logo {
         display: inline-block;
         margin-bottom: 5px;
         }
         .mobile .rzp-branding .custom-branding .powered-by-rzp {
         display: inline-block;
         vertical-align: super;
         margin-left: 10px;
         }
         .mobile .rzp-branding .rzp-footer-row-2 {
         text-align: center;
         }
         .mobile .rzp-branding .rzp-footer-row-2 .payment-methods {
         display: inline-block;
         max-width: 234px;
         margin-top: 10px;
         }
         .mobile .rzp-branding .footer-msg {
         text-align: center;
         margin-top: 10px;
         }
         .mob-header {
         background-color: #6a5dd1;
         padding: 16px;
         }
         .mobile-preview {
         padding: 20px 32px;
         color: rgba(0,0,0,0.54);
         }
         .mobile-preview .media {
         width: 18px;
         height: 40px;
         line-height: 40px;
         }
         .invoice-pay {
         box-shadow: 2px 4px 9px 1px rgba(0,0,0,0.05);
         transition: all 0.25s ease-in-out;
         }
         .invoice-pay:hover {
         box-shadow: 0 5px 16px 1px rgba(0,0,0,0.13), 0 1px 4px 0 rgba(0,0,0,0.09);
         }
         .report-message {
         margin-top: 8px;
         }
         .report-message a {
         display: inline-block;
         }
         .report-message img {
         vertical-align: middle;
         width: 12px;
         }
         @media screen and (max-device-width: 600px) {
         .invoice-pay {
         position: fixed;
         bottom: 0;
         left: 0;
         border-radius: 0;
         z-index: 1;
         }
         .invoice .invoice-row .rzp-header-col {
         padding-bottom: 24px;
         margin-bottom: 24px;
         border-bottom: 1px solid #f3f3f3;
         }
         .invoice .invoice-row .rzp-header-col {
         margin-bottom: 40px;
         }
         .invoice .invoice-row .rzp-header-branding .rzp-header-branding-label {
         display: inline-block;
         text-align: right;
         float: right;
         }
         .invoice .lineitems-container .table > tbody > tr.mobile-row {
         display: table-row;
         }
         .invoice .lineitems-container .table > tbody > tr.mobile-row > td {
         border-bottom: 0;
         padding-bottom: 0;
         }
         }
         .rzp-branding-desktop {
         max-width: 653px;
         margin: 0 auto;
         padding: 24px;
         }
         .rzp-branding-desktop>div:first-child {
         margin-bottom: 0px;
         }
         .rzp-branding-desktop>div:first-child svg {
         display: inline-block;
         margin: 4px 0;
         }
         .rzp-branding-desktop>div:first-child a {
         float: none;
         margin-bottom: 0;
         }
         .rzp-branding-desktop .powered-by-rzp {
         display: inline;
         vertical-align: super;
         margin-left: 15px;
         }
         .rzp-branding-desktop .payment-methods {
         max-width: 234px;
         float: right;
         margin-top: 10px;
         }
         .rzp-branding {
         padding: 24px;
         border: 1px solid #e0e0e0;
         border-radius: 4px;
         font-size: 12px;
         line-height: 20px;
         }
         .rzp-branding p.desc {
         margin-top: 5px;
         margin-bottom: 0;
         }
         @media print {
         .rzp-branding {
         display: none;
         }
         }
         .subscription-invoice label.text-success {
         color: #27c24c;
         }
      </style>
      <meta http-equiv="origin-trial" content="AymqwRC7u88Y4JPvfIF2F37QKylC04248hLCdJAsh8xgOfe/dVJPV3XS3wLFca1ZMVOtnBfVjaCMTVudWM//5g4AAAB7eyJvcmlnaW4iOiJodHRwczovL3d3dy5nb29nbGV0YWdtYW5hZ2VyLmNvbTo0NDMiLCJmZWF0dXJlIjoiUHJpdmFjeVNhbmRib3hBZHNBUElzIiwiZXhwaXJ5IjoxNjk1MTY3OTk5LCJpc1RoaXJkUGFydHkiOnRydWV9">
   </head>
   <body>
    <div class="col-8 invoice-container ">
      <div class="invoice" data-test="">
          <div class="row invoice-row invoice-branding" style="display: flex; align-items: center;">
            <div class="col-8 merchant-header-col">
                <div class="media media-wrapper">
                  <div class="media-body valign-top">
                      <h3 class="merchant-name">SATYUG LIFE FOUNDATION</h3>
                  </div>
                </div>
            </div>
            <div class="col-4 text-right rzp-header-col">
                <div class="rzp-header-branding">
                  <a class="rzp-logo" href="https://www.digitalrammandir.com" target="_blank">
                  <img src="https://dvf7opio6knc7.cloudfront.net/image.png" alt=".">
                  </a>
                  <div class="rzp-header-branding-label">
                      <div>Invoicing and payments</div>
                      <div>powered by <a href="https://www.digitalrammandir.com" target="_blank">Satyug</a></div>
                  </div>
                </div>
            </div>
          </div>
          <div class="row invoice-row">
            <div class="col-12">
                <h3 class="invoice-id-label">Invoice</h3>
                <span class="invoice-id">
                ID: ${data?.invoiceNo}
                </span>
                <div class="inv-summary">
                </div>
            </div>
          </div>
          <div class="row invoice-row">
            <div class="col-12 amount-due-container">
                <label class="amount-due-header">AMOUNT </label>
                <h3 class="amount-due amount">
                  ₹ ${data?.amount}
                </h3>
            </div>
          </div>
          <div class="row invoice-row">
            <div class="col-6 invoice-details">
            </div>
            <div class="col-6 invoice-details">
                <div class="invoice-date">
                  <label>ISSUE DATE</label>
                  <div>
                      ${data?.date}
                  </div>
                </div>
            </div>
          </div>
          <div class="row invoice-row no-padding">
            <div class="lineitems-container">
                <div class="inv__itemcontainer inv__itemcontainer-header">
                  <div class="table-responsive">
                      <table class="table inv__itemtable">
                        <thead>
                            <tr>
                              <th class="lineItem__item">DESCRIPTION</th>
                              <th class="lineItem__amount text-right">UNIT PRICE</th>
                              <th class="lineItem__qty text-right">QTY</th>
                              <th class="lineItem__total text-right">AMOUNT</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                              <td class="lineItem__item">
                                  <div>
                                    <span class="item-name">${data?.type}</span>
                                  </div>
                                  <div class="item-desc">${data?.description}</div>
                              </td>
                              <td class="lineItem__amount rate text-right">
                                  <span class="amount">₹ ${data?.amount}</span>
                              </td>
                              <td class="lineItem__qty qty text-right">${data?.qty}</td>
                              <td class="lineItem__total amount text-right">
                                  <span class="amount">₹ ${data?.amount * data?.qty}</span>
                              </td>
                            </tr>
                        </tbody>
                      </table>
                  </div>
                </div>
                <div class="inv__amountcontainer table-responsive">
                  <table class="table">
                      <tbody>
                        <tr class="total total-amount-due">
                            <td class="text-right"><b>Total</b></td>
                            <td class="inv-total text-right" width="30%">
                              <b class="amount">₹ ${data?.amount * data?.qty}</b>
                            </td>
                        </tr>
                      </tbody>
                  </table>
                </div>
            </div>
          </div>
          <div class="row footer">
            <div class="merchant-footer">
                <h4>SATYUG LIFE FOUNDATION</h4>
            </div>
          </div>
      </div>
    </div>
   </body>
</html>`;
