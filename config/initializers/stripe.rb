Rails.configuration.stripe = {
  publishable_key: 'pk_test_qblFNYngBkEdjEZ16jxxoWSM',
  secret_key:      'sk_test_26PHem9AhJZvU623DfE1x4sd'
}

Stripe.api_key = Rails.configuration.stripe[:secret_key]
