(function() {var implementors = {};
implementors['openssl_sys'] = ["impl <a class='trait' href='https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html' title='core::clone::Clone'>Clone</a> for <a class='struct' href='openssl_sys/struct.BIO_METHOD.html' title='openssl_sys::BIO_METHOD'>BIO_METHOD</a>","impl <a class='trait' href='https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html' title='core::clone::Clone'>Clone</a> for <a class='struct' href='openssl_sys/struct.EVP_MD_CTX.html' title='openssl_sys::EVP_MD_CTX'>EVP_MD_CTX</a>","impl <a class='trait' href='https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html' title='core::clone::Clone'>Clone</a> for <a class='struct' href='openssl_sys/struct.HMAC_CTX.html' title='openssl_sys::HMAC_CTX'>HMAC_CTX</a>","impl <a class='trait' href='https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html' title='core::clone::Clone'>Clone</a> for <a class='struct' href='openssl_sys/struct.GENERAL_NAME.html' title='openssl_sys::GENERAL_NAME'>GENERAL_NAME</a>","impl <a class='trait' href='https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html' title='core::clone::Clone'>Clone</a> for <a class='struct' href='openssl_sys/struct.X509V3_CTX.html' title='openssl_sys::X509V3_CTX'>X509V3_CTX</a>","impl <a class='trait' href='https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html' title='core::clone::Clone'>Clone</a> for <a class='struct' href='openssl_sys/struct.BIGNUM.html' title='openssl_sys::BIGNUM'>BIGNUM</a>",];implementors['openssl'] = ["impl <a class='trait' href='https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html' title='core::clone::Clone'>Clone</a> for <a class='struct' href='openssl/bn/struct.BigNum.html' title='openssl::bn::BigNum'>BigNum</a>","impl <a class='trait' href='https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html' title='core::clone::Clone'>Clone</a> for <a class='enum' href='openssl/bn/enum.RNGProperty.html' title='openssl::bn::RNGProperty'>RNGProperty</a>","impl <a class='trait' href='https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html' title='core::clone::Clone'>Clone</a> for <a class='enum' href='openssl/crypto/hash/enum.Type.html' title='openssl::crypto::hash::Type'>Type</a>","impl <a class='trait' href='https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html' title='core::clone::Clone'>Clone</a> for <a class='struct' href='openssl/crypto/hash/struct.Hasher.html' title='openssl::crypto::hash::Hasher'>Hasher</a>","impl <a class='trait' href='https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html' title='core::clone::Clone'>Clone</a> for <a class='struct' href='openssl/crypto/hmac/struct.HMAC.html' title='openssl::crypto::hmac::HMAC'>HMAC</a>","impl <a class='trait' href='https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html' title='core::clone::Clone'>Clone</a> for <a class='struct' href='openssl/crypto/pkcs5/struct.KeyIvPair.html' title='openssl::crypto::pkcs5::KeyIvPair'>KeyIvPair</a>","impl <a class='trait' href='https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html' title='core::clone::Clone'>Clone</a> for <a class='enum' href='openssl/crypto/pkey/enum.Parts.html' title='openssl::crypto::pkey::Parts'>Parts</a>","impl <a class='trait' href='https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html' title='core::clone::Clone'>Clone</a> for <a class='enum' href='openssl/crypto/pkey/enum.Role.html' title='openssl::crypto::pkey::Role'>Role</a>","impl <a class='trait' href='https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html' title='core::clone::Clone'>Clone</a> for <a class='enum' href='openssl/crypto/pkey/enum.EncryptionPadding.html' title='openssl::crypto::pkey::EncryptionPadding'>EncryptionPadding</a>","impl <a class='trait' href='https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html' title='core::clone::Clone'>Clone</a> for <a class='struct' href='openssl/crypto/pkey/struct.PKey.html' title='openssl::crypto::pkey::PKey'>PKey</a>","impl <a class='trait' href='https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html' title='core::clone::Clone'>Clone</a> for <a class='enum' href='openssl/crypto/symm/enum.Mode.html' title='openssl::crypto::symm::Mode'>Mode</a>","impl <a class='trait' href='https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html' title='core::clone::Clone'>Clone</a> for <a class='enum' href='openssl/crypto/symm/enum.Type.html' title='openssl::crypto::symm::Type'>Type</a>","impl <a class='trait' href='https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html' title='core::clone::Clone'>Clone</a> for <a class='enum' href='openssl/ssl/error/enum.OpensslError.html' title='openssl::ssl::error::OpensslError'>OpensslError</a>","impl <a class='trait' href='https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html' title='core::clone::Clone'>Clone</a> for <a class='struct' href='openssl/ssl/struct.SslContextOptions.html' title='openssl::ssl::SslContextOptions'>SslContextOptions</a>","impl <a class='trait' href='https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html' title='core::clone::Clone'>Clone</a> for <a class='enum' href='openssl/ssl/enum.SslMethod.html' title='openssl::ssl::SslMethod'>SslMethod</a>","impl <a class='trait' href='https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html' title='core::clone::Clone'>Clone</a> for <a class='struct' href='openssl/ssl/struct.SslVerifyMode.html' title='openssl::ssl::SslVerifyMode'>SslVerifyMode</a>","impl <a class='trait' href='https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html' title='core::clone::Clone'>Clone</a> for <a class='struct' href='openssl/ssl/struct.SslContext.html' title='openssl::ssl::SslContext'>SslContext</a>","impl <a class='trait' href='https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html' title='core::clone::Clone'>Clone</a> for <a class='struct' href='openssl/ssl/struct.Ssl.html' title='openssl::ssl::Ssl'>Ssl</a>","impl&lt;S: <a class='trait' href='https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html' title='core::clone::Clone'>Clone</a> + <a class='trait' href='https://doc.rust-lang.org/nightly/std/io/trait.Read.html' title='std::io::Read'>Read</a> + <a class='trait' href='https://doc.rust-lang.org/nightly/std/io/trait.Write.html' title='std::io::Write'>Write</a>&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html' title='core::clone::Clone'>Clone</a> for <a class='struct' href='openssl/ssl/struct.SslStream.html' title='openssl::ssl::SslStream'>SslStream</a>&lt;S&gt;","impl&lt;S: <a class='trait' href='https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html' title='core::clone::Clone'>Clone</a> + <a class='trait' href='https://doc.rust-lang.org/nightly/std/io/trait.Read.html' title='std::io::Read'>Read</a> + <a class='trait' href='https://doc.rust-lang.org/nightly/std/io/trait.Write.html' title='std::io::Write'>Write</a>&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html' title='core::clone::Clone'>Clone</a> for <a class='struct' href='openssl/ssl/struct.NonblockingSslStream.html' title='openssl::ssl::NonblockingSslStream'>NonblockingSslStream</a>&lt;S&gt;","impl <a class='trait' href='https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html' title='core::clone::Clone'>Clone</a> for <a class='enum' href='openssl/x509/extension/enum.ExtensionType.html' title='openssl::x509::extension::ExtensionType'>ExtensionType</a>","impl <a class='trait' href='https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html' title='core::clone::Clone'>Clone</a> for <a class='enum' href='openssl/x509/extension/enum.Extension.html' title='openssl::x509::extension::Extension'>Extension</a>","impl <a class='trait' href='https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html' title='core::clone::Clone'>Clone</a> for <a class='enum' href='openssl/x509/extension/enum.KeyUsageOption.html' title='openssl::x509::extension::KeyUsageOption'>KeyUsageOption</a>","impl <a class='trait' href='https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html' title='core::clone::Clone'>Clone</a> for <a class='enum' href='openssl/x509/extension/enum.ExtKeyUsageOption.html' title='openssl::x509::extension::ExtKeyUsageOption'>ExtKeyUsageOption</a>","impl <a class='trait' href='https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html' title='core::clone::Clone'>Clone</a> for <a class='enum' href='openssl/x509/extension/enum.AltNameOption.html' title='openssl::x509::extension::AltNameOption'>AltNameOption</a>","impl <a class='trait' href='https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html' title='core::clone::Clone'>Clone</a> for <a class='enum' href='openssl/x509/enum.X509FileType.html' title='openssl::x509::X509FileType'>X509FileType</a>","impl&lt;'ctx&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html' title='core::clone::Clone'>Clone</a> for <a class='struct' href='openssl/x509/struct.X509.html' title='openssl::x509::X509'>X509</a>&lt;'ctx&gt;","impl <a class='trait' href='https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html' title='core::clone::Clone'>Clone</a> for <a class='enum' href='openssl/x509/enum.X509ValidationError.html' title='openssl::x509::X509ValidationError'>X509ValidationError</a>","impl <a class='trait' href='https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html' title='core::clone::Clone'>Clone</a> for <a class='enum' href='openssl/nid/enum.Nid.html' title='openssl::nid::Nid'>Nid</a>",];

            if (window.register_implementors) {
                window.register_implementors(implementors);
            } else {
                window.pending_implementors = implementors;
            }
        
})()